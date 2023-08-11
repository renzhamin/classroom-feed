<script lang="ts">
    import type { Post } from "$lib/types";
    export let material: Post["materials"][number];
    let link: string, title: string, name: string;

    if ("driveFile" in material) {
        name = "File";
        link = material.driveFile.driveFile.alternateLink;
        title = material.driveFile.driveFile.title;
    } else if ("youtubeVideo" in material) {
        name = "Video";
        link = material.youtubeVideo.alternateLink;
        title = material.youtubeVideo.title;
    } else if ("link" in material) {
        name = "Link";
        link = material.link.url;
        title = material.link.title;
    } else if ("form" in material) {
        name = "Form";
        link = material.form.formUrl;
        title = material.form.title;
    }
</script>

<span>{name} : </span>
<a class="text-info underline" href={link} target="_blank">{title}</a>
