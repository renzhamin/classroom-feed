<script lang="ts">
    import type { Post } from "$lib/types";
    import { format_date } from "$lib/client/helpers";
    import Material from "./Material.svelte";
    import { onMount } from "svelte";
    export let item: Post;
    export let course_name: string | undefined;
    let links: Post["materials"] = [];

    const regex_match_url =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    onMount(() => {
        const matches = item?.text?.matchAll(regex_match_url);
        if (matches) {
            [...matches].forEach((match) => {
                links.push({
                    link: {
                        title: match[0],
                        url: match[0],
                    },
                });
                links = links;
            });
        }
    });
</script>

<div class="card-body">
    <h2 class="card-title">
        {course_name}
    </h2>
    <p class="whitespace-pre-wrap" id="post_text">{item.text}</p>
    {#if links.length}
        <div>
            <h3 class="mt-4">Extracted from announcement:</h3>
            {#each links as link}
                <div class="my-4">
                    <Material material={link} />
                </div>
            {/each}
        </div>
    {/if}
    {#if item.materials}
        <div>
            <h3 class="mt-8">Attached Materials:</h3>
            {#each item.materials as material}
                <div class="my-4">
                    <Material {material} />
                </div>
            {/each}
        </div>
    {/if}
    <div class="flex">
        <div class="justify-start">
            {format_date(item.updateTime)}
        </div>
        <div class="card-actions justify-end ml-auto">
            <a
                class="link w-4 h-4 md:scale-125 tooltip"
                data-tip="link to post"
                href={item.alternateLink}
                target="_blank"
            >
                <svg
                    class="fill-accent hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                    /></svg
                >
            </a>
        </div>
    </div>
</div>

<style>
    #post_text {
        overflow-wrap: anywhere;
    }
</style>
