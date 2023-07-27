<script lang="ts">
    import type { Post } from "$lib/data";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { course_map, sel_courses, sidebar_visible } from "$lib/store";
    import { localStore } from "$lib/helpers";
    import type { PageData } from "./$types";
    export let data: PageData;
    const course_promise = data.streamed.courses;

    let allPosts: Post[] = [];
    let filteredPosts: Post[] = [];
    let total_courses = 0;
    let posts_fetched = 0;

    $: percentage_fetched = ~~((posts_fetched / total_courses) * 100);

    function check_for_course_change(new_arr: any): Array<string> {
        if (!new_arr) return [];
        const added: Array<string> = [];
        const removed: Set<string> = new Set();

        // remove unenrolled courses
        for (const [id, _] of $course_map) {
            if (!new_arr[id]) {
                $course_map.delete(id);
                total_courses -= 1;
                removed.add(id);
            }
        }

        // add new courses
        Object.entries(new_arr).map((entry) => {
            const id = entry[0];
            const course: any = entry[1];

            if (!$course_map.has(id)) {
                added.push(id);
                $course_map.set(id, course);
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
            localStore.set("course_map", $course_map);
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
    let posts_promises: Promise<void[]>;

    onMount(() => {
        const saved_course_map = localStore.get("course_map");
        if (saved_course_map) {
            $course_map = new Map(saved_course_map);
            const course_ids = [...$course_map.keys()];
            total_courses = course_ids.length;
            $sel_courses = localStore.get("sel_courses", false) || course_ids;
            posts_promises = Promise.all(fetchPosts(course_ids));
        }

        $sidebar_visible = localStore.get("sidebar_visible", true);

        course_promise.then((data: any) => {
            const new_courses = check_for_course_change(data);
            if (new_courses.length) {
                posts_promises = Promise.all(fetchPosts(new_courses));
                total_courses = $course_map.size;
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
            {#await posts_promises}
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
                            course_name={$course_map.get(item.courseId).name}
                        />
                    </div>
                {/each}
            </div>
        </div>
    </main>
</body>
