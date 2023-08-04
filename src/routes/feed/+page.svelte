<script lang="ts">
    import { slide } from "svelte/transition";
    import type { Post } from "$lib/server/data";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { course_map, sel_courses, sidebar_visible } from "$lib/store";
    import { set_fetch_error, localStore } from "$lib/client/helpers";
    let courses_promise: Promise<void>;

    let all_posts: Post[] = [];
    let filtered_posts: Post[] = [];
    let total_courses = 0;
    let posts_fetched = 0;
    let fetch_error = "";
    let show_has_new_posts = false;

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
        try {
            let data: any = await fetch(`/api/posts/${courseId}`);
            if (!data.ok) {
                fetch_error = await set_fetch_error(data);
                return;
            }
            data = await data.json();
            if (data.updated == true) {
                show_has_new_posts = true;
                setTimeout(() => (show_has_new_posts = false), 4000);
            }
            const new_posts = data.data as Post[];
            all_posts = all_posts?.filter(
                (post) => !new_posts.find((new_post) => new_post.id === post.id)
            );
            all_posts = all_posts.concat(new_posts);
            all_posts = all_posts.sort((a, b) => {
                return a.updateTime < b.updateTime ? 1 : -1;
            });
            posts_fetched += 1;
        } catch (err) {
            console.error(err);
        }
    }

    function fetchPosts(courses: Array<string>) {
        const promises: Promise<void>[] = [];
        courses.forEach((courseId) => {
            promises.push(fetchData(courseId));
        });
        return promises;
    }

    let posts_promises: Promise<PromiseSettledResult<void>[]>;

    onMount(() => {
        all_posts = localStore.get("all_posts", []);
        const saved_course_map = localStore.get("course_map");
        if (saved_course_map) {
            $course_map = new Map(saved_course_map);
            const course_ids = [...$course_map.keys()];
            total_courses = course_ids.length;
            $sel_courses = localStore.get("sel_courses", false) || course_ids;
            posts_promises = Promise.allSettled(fetchPosts(course_ids));
        }

        courses_promise = fetch("/api/courses")
            .then((data) => {
                if (!data.ok) {
                    set_fetch_error(data).then((text) => (fetch_error = text));
                    throw new Error("fetching courses failed");
                }

                return data;
            })
            .then((data) => data.json())
            .then((data) => {
                if (!data.data) return;
                const new_courses = check_for_course_change(data.data);
                total_courses = $course_map.size;
                if (new_courses.length) {
                    posts_promises = Promise.allSettled(
                        fetchPosts(new_courses)
                    );

                    posts_promises.then(() => {
                        if (all_posts?.length) {
                            localStore.set("all_posts", all_posts);
                        }
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });

        $sidebar_visible = localStore.get("sidebar_visible", true);
    });

    $: if (all_posts?.length) {
        const course_set = new Set($sel_courses);
        filtered_posts = all_posts.filter((post) =>
            course_set.has(post.courseId)
        );
    }
</script>

<NavBar />
<main class="flex flex-col md:flex-row">
    {#if $sidebar_visible}
        <SideBar />
    {/if}
    <div class="flex-grow flex flex-col justify-start items-center mx-6">
        {#await courses_promise}
            <span class="animate-pulse">Checking classroom enrollments</span>
        {/await}
        {#if !!fetch_error}
            <span class="text-red-500">{fetch_error}</span>
        {/if}
        {#if show_has_new_posts}
            <span transition:slide={{ duration: 1000 }} class="text-green-500"
                >There are new posts</span
            >
        {/if}

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
                    <progress class="progress progress-success w-56 md:w-72" />
                {/if}
            </div>
        {:catch}
            <div><span>Failed to fetch posts</span></div>
        {/await}
        <div class="w-full">
            {#each filtered_posts as item (item.id)}
                <div class="card bg-base-100 shadow-xl shadow-base-300 my-4">
                    <PostCard
                        {item}
                        course_name={$course_map.get(item.courseId).name}
                    />
                </div>
            {/each}
        </div>
    </div>
</main>
