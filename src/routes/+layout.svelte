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
