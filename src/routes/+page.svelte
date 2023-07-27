<script lang="ts">
    import type { Post } from "$lib/data";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { all_courses, sel_courses, sidebar_visible } from "$lib/store";
    import { localStore } from "$lib/helpers";

    let allPosts: Post[] = [];
    let filteredPosts: Post[] = [];

    async function fetchData(courseId: string) {
        let data: any = await fetch(`/api/posts/${courseId}`);
        data = await data.json();
        allPosts = allPosts.concat(data.data);
        allPosts.sort((a, b) => {
            return a.updateTime < b.updateTime ? 1 : -1;
        });
        allPosts = allPosts;
    }

    let allPromises: Promise<void[]>;

    onMount(() => {
        const all_courses_saved = localStore.get("all_courses");
        if (!all_courses_saved) {
            fetch("/api/courses")
                .then((data) => data.json())
                .then((data) => {
                    $all_courses = data.data;
                    console.log("FETCHED COURSES");
                    localStore.set("all_courses", data.data);
                });
        } else {
            $all_courses = all_courses_saved;
        }

        $sel_courses = localStore.get("sel_courses", Object.keys($all_courses));
        $sidebar_visible = localStore.get("sidebar_visible", true);

        const promises: Promise<void>[] = [];
        Object.keys($all_courses).forEach((courseId) => {
            promises.push(fetchData(courseId.toString()));
        });

        allPromises = Promise.all(promises);
    });

    $: {
        const course_set = new Set($sel_courses);
        filteredPosts = allPosts.filter((post) =>
            course_set.has(post.courseId)
        );
    }
</script>

<body class="flex flex-col w-full">
    <NavBar />
    <main class="flex flex-col md:flex-row">
        {#if $sidebar_visible}
            <SideBar />
        {/if}
        <div class="flex-grow flex flex-col justify-start items-center mx-6">
            {#await allPromises}
                <div>
                    {#each { length: 4 } as _}
                        <span class="loading loading-ring loading-lg" />
                    {/each}
                </div>
            {/await}
            <div class="w-full">
                {#each filteredPosts as item (item.id)}
                    <div
                        class="card bg-base-100 shadow-xl shadow-base-300 my-4"
                    >
                        <PostCard
                            {item}
                            course_name={$all_courses[item.courseId].name}
                        />
                    </div>
                {/each}
            </div>
        </div>
    </main>
</body>
