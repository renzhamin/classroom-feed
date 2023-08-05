<script>
    import "../app.postcss";
    import { pwaInfo } from "virtual:pwa-info";

    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
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
