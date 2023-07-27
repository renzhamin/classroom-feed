<script lang="ts">
    import type { Post } from "$lib/data";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { course_map, sel_courses, sidebar_visible } from "$lib/store";

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
        const promises: Promise<void>[] = [];
        for (let i = 1; i <= 45; i++) {
            promises.push(fetchData(i.toString()));
        }

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
    <main class="flex flex-col md:flex-row h-screen">
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
                            course_name={course_map.get(item.courseId)?.name}
                        />
                    </div>
                {/each}
            </div>
        </div>
    </main>
</body>
