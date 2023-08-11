<script lang="ts">
    import { onMount } from "svelte";
    import "../app.postcss";
    import { pwaInfo } from "virtual:pwa-info";

    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";

    let toTopButton: HTMLButtonElement;

    onMount(() => {
        document.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > window.innerHeight) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        });
    });
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

<main>
    <slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
        <p>
            Copyright © 2023 <a
                class="text-accent"
                href="https://www.linkedin.com/in/renzhamin"
                target="_blank">@renzhamin</a
            >
        </p>
    </div>
</footer>

<button
    bind:this={toTopButton}
    on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    title="Go To Top"
    class="hidden fixed z-90 bottom-8 right-8 w-10 h-10 rounded-full drop-shadow-md bg-accent text-accent-content text-2xl"
    >&uarr;</button
>
