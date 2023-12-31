<script lang="ts">
    import { slide } from "svelte/transition";
    import { localStore } from "$lib/client/helpers";
    import { sidebar_visible } from "$lib/store";
    import { onMount } from "svelte";
    import { signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import { invalidateAll } from "$app/navigation";

    let theme = "light";
    let log_out_modal: HTMLDialogElement;

    onMount(() => {
        if (
            !localStorage.theme &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            theme = "dark";
        } else {
            theme = document.body.dataset.theme = localStorage.theme;
        }

        if ($page.data.session.error === "RefreshAccessTokenError") {
            signOut();
        }
    });

    function handle_theme_change() {
        theme = theme == "light" ? "dark" : "light";
        localStorage.theme = theme;
        document.body.dataset.theme = theme;
    }
</script>

<div
    class="flex justify-center items-center sticky top-0 w-full h-[6vh] bg-base-300 z-10"
>
    <div class="mr-auto">
        <button
            on:click={() => {
                $sidebar_visible = !$sidebar_visible;
                localStore.set("sidebar_visible", $sidebar_visible);
                document
                    .getElementById("menusvg")
                    ?.classList.toggle("rotate-180");
            }}
            class="ml-2 p-4 group"
        >
            <svg
                id="menusvg"
                class="w-6 h-6 transition-transform group-hover:fill-info"
                class:fill-white={theme == "dark"}
                class:rotate-180={!$sidebar_visible}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                ><path
                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
                /></svg
            >
        </button>

        <button on:click={handle_theme_change} class="group p-4">
            {#if theme === "dark"}
                <svg
                    transition:slide={{ axis: "y" }}
                    class="fill-white h-6 w-6 group-hover:fill-info"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    ><path
                        d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
                    /></svg
                >
            {:else}
                <svg
                    transition:slide={{ axis: "y" }}
                    class="h-6 w-6 group-hover:fill-info"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    ><path
                        d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                    /></svg
                >
            {/if}
        </button>
    </div>
    <div class="mr-auto">
        <span class="normal-case text-xl mx-auto hidden md:inline"
            >Classroom Feed</span
        >
    </div>

    <a href="/about" class="btn btn-sm btn-outline">about</a>

    <details class="dropdown dropdown-bottom dropdown-end">
        <summary class="w-10 mx-6">
            <img
                class="object-contain rounded-full border-2 border-base-content hover:scale-105 hover:cursor-pointer"
                src={$page.data.session.user?.image}
                alt="avatar"
            />
        </summary>
        <ul
            class="dropdown-content z-[1] menu p-2 shadow-3xl bg-base-200 rounded-box w-52"
        >
            <li>
                <button
                    on:click={() => {
                        log_out_modal?.showModal();
                    }}>Log Out</button
                >
            </li>
        </ul>
    </details>
    <dialog bind:this={log_out_modal} class="modal">
        <form method="dialog" class="modal-box">
            <p class="py-4 font-bold">Are you sure you want to log out ?</p>
            <div class="modal-action">
                <button
                    class="btn btn-error btn-outline"
                    on:click={() => {
                        invalidateAll();
                        localStorage.clear();
                        signOut();
                    }}>Log Out</button
                >
                <button class="btn btn-success btn-outline w-28">Close</button>
            </div>
        </form>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</div>
