<script lang="ts">
    import { fly } from "svelte/transition";
    import { sel_courses, course_map } from "$lib/store";
    import { localStore } from "$lib/client/helpers";

    $: localStore.set("sel_courses", [...new Set($sel_courses)]);
</script>

<aside
    in:fly={{ x: -200, duration: 500 }}
    out:fly={{ x: -200, duration: 400 }}
    class="flex flex-col gap-y-2 justify-center items-center md:sticky md:top-10 w-full md:w-72 h-screen p-4 bg-base-200"
>
    <span class="font-bold mb-2">Course Filters</span>
    <div class="flex justify-between gap-2">
        <button
            class="btn btn-outline btn-xs flex-grow"
            on:click={() => {
                $sel_courses = [...$course_map.keys()];
            }}>Select All</button
        >
        <button
            on:click={() => {
                $sel_courses = [];
            }}
            class="btn btn-outline btn-xs flex-grow float-right"
        >
            Deselect All
        </button>
    </div>

    <div class="overflow-scroll w-full h-full scroll-green px-4">
        {#if $course_map}
            {#each $course_map as [id, course]}
                <div class="form-control">
                    <label class="cursor-pointer label">
                        <span class="label-text">{course.name}</span>
                        <input
                            type="checkbox"
                            bind:group={$sel_courses}
                            value={id}
                            class="checkbox-xs checkbox-success"
                            name="courses"
                        />
                    </label>
                </div>
            {/each}
        {/if}
    </div>
</aside>
