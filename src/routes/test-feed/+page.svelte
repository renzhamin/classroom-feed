<script lang="ts">
    import { slide } from "svelte/transition";
    import type { Post } from "$lib/types";
    import { onMount } from "svelte";
    import PostCard from "./PostCard.svelte";
    import NavBar from "./NavBar.svelte";
    import SideBar from "./SideBar.svelte";
    import { course_map, sel_courses, sidebar_visible } from "./store";
    import { localStore } from "$lib/client/helpers";
    let courses_promise: Promise<void>;

    let all_posts: Post[] = [];
    let filtered_posts: Post[] = [];
    let fetch_error = "";
    let show_has_new_posts = false;

    onMount(() => {
        $sidebar_visible = localStore.get("sidebar_visible", false);

        all_posts = localStore.get("all_posts", []);
        const saved_course_map = localStore.get("course_map");
        if (saved_course_map) {
            $course_map = new Map(saved_course_map);
            const course_ids = [...$course_map.keys()];
            $sel_courses = localStore.get("sel_courses", false) || course_ids;
        }
    });

    $: if (all_posts?.length) {
        const course_set = new Set($sel_courses);
        filtered_posts = all_posts.filter((post) =>
            course_set.has(post.courseId)
        );
    }
</script>

<NavBar />
<div class="min-h-[94vh] flex flex-col md:flex-row">
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
</div>
