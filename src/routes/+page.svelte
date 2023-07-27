<script lang="ts">
    import type { Post } from "$lib/data";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { all_courses, sel_courses, sidebar_visible } from "$lib/store";
    import { localStore } from "$lib/helpers";
    import type { PageData } from "./$types";
    export let data: PageData;
    const course_promise = data.streamed.courses;
    let course_promise_resolved = false;

    let allPosts: Post[] = [];
    let filteredPosts: Post[] = [];
    let total_courses = 0;
    let posts_fetched = 0;

    $: percentage_fetched = ~~((posts_fetched / total_courses) * 100);

    function check_for_course_change(new_arr: any) {
        if (!new_arr || !$all_courses) return null;
        const added: Array<string> = [];
        const removed: Set<string> = new Set();

        // remove unenrolled courses
        Object.entries($all_courses).map((entry) => {
            const id = entry[0];
            if (!new_arr[id]) {
                delete $all_courses[id];
                removed.add(id);
            }
        });

        // add new courses
        Object.entries(new_arr).map((entry) => {
            const id = entry[0];
            const course: any = entry[1];

            if (!$all_courses[id]) {
                added.push(id);
                $all_courses[id] = course;
            }
        });

        if (removed.size) {
            $sel_courses = $sel_courses.filter((id) => !removed.has(id));
        }

        if (added.length) {
            added.forEach((id) => $sel_courses.push(id));
            $sel_courses = $sel_courses;
        }

        if (removed.size || added.length) {
            localStore.set("all_courses", $all_courses);
        }

        return added;
    }

    async function fetchData(courseId: string) {
        let data: any = await fetch(`/api/posts/${courseId}`);
        data = await data.json();
        allPosts = allPosts.concat(data.data);
        allPosts = allPosts.sort((a, b) => {
            return a.updateTime < b.updateTime ? 1 : -1;
        });
        posts_fetched += 1;
    }

    function fetchPosts(courses: Array<string>) {
        const promises: Promise<void>[] = [];
        courses.forEach((courseId) => {
            promises.push(fetchData(courseId));
        });
        return promises;
    }
    let allPromises: Promise<void[]>;

    onMount(() => {
        const all_courses_saved = localStore.get("all_courses");
        if (all_courses_saved) {
            $all_courses = all_courses_saved;
            const course_ids = Object.keys($all_courses);
            total_courses = course_ids.length;
            $sel_courses = localStore.get("sel_courses", false) || course_ids;
            allPromises = Promise.all(fetchPosts(Object.keys($all_courses)));
        }

        $sidebar_visible = localStore.get("sidebar_visible", true);

        course_promise.then((data: any) => {
            course_promise_resolved = true;
            const new_courses = check_for_course_change(data);
            if (new_courses.length) {
                fetchPosts(new_courses);
            }
        });
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
            {#await course_promise}
                <span class="animate-pulse">Checking classroom enrollments</span
                >
            {/await}
            {#await allPromises}
                <div class="flex flex-col justify-center items-center">
                    <span class="block"
                        >Fetched posts from {posts_fetched} / {total_courses} courses</span
                    >
                    {#if posts_fetched > 0}
                        <progress
                            class="progress progress-success w-56 md:w-96"
                            value={percentage_fetched}
                            max="100"
                        />
                    {:else}
                        <progress
                            class="progress progress-success w-56 md:w-72"
                        />
                    {/if}
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
