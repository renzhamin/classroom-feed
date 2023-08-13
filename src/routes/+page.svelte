<script>
    import { signIn } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
</script>

<div class=" w-screen">
    <div class="flex-col-center lg:flex-row">
        <div class="h-screen lg:h-full flex-col-center">
            <div class="flex-col-center gap-y-8 lg:w-min px-6">
                <h1 class="text-center text-4xl font-bold">
                    Check announcements of all your enrolled google classrooms
                    sorted by last updated time!
                </h1>
                <h2>Mobile support via PWA</h2>
                <button
                    class="btn btn-primary"
                    on:click={() => {
                        if (!$page.data.session) {
                            signIn("google");
                        } else {
                            goto("/feed");
                        }
                    }}
                >
                    Get Started</button
                >
            </div>
        </div>
        <div class="h-screen lg:max-h-screen lg:p-8">
            <img
                src="/page-shot.webp"
                alt="hero"
                class="rounded-lg shadow-2xl object-contain h-full"
                id="page-shot"
            />
        </div>
    </div>
    <div class="lg:flex-row-center">
        <div
            class="h-screen w-full bg-base-200 lg:p-16 lg:text-xl lg:basis-1/2"
        >
            <div class="h-full flex-col-center mx-12 lg:mx-0">
                <h2 class="text-4xl text-center">How does it work ?</h2>
                <p class="my-4">
                    As soon as the page is loaded, announcements from all the
                    courses are fetched concurrently!
                </p>
                <p>
                    A caching mechanism is set in place to make the app as fast
                    as it can be. If one user fetched announcements from a
                    course then in the next minute anyone who tries to fetch
                    announcements from the same course will get a cached
                    response, making the google api the only bottleneck.
                </p>
            </div>
        </div>
        <div
            class="h-screen flex-col-center lg:p-16 lg:text-xl mx-12 lg:mx-0 lg:basis-1/2"
        >
            <h2 class="text-4xl text-center">What are the limitations ?</h2>
            <p class="my-4">
                For each particular course only the latest 5 announcements are
                fetched as the purpose of this app is to have a quick glance at
                the latest announcements.
            </p>
            <p>
                The google classroom api that is used to fetch the announcements
                only allows a limited number of requests for free. To ensure all
                the users get equal usage, the app enforces the limitation of
                maximum 100 requests per day.
            </p>
        </div>
    </div>
    <div class="h-screen flex-col-center lg:p-16 lg:text-xl mx-12 lg:mx-0">
        <h2 class="text-4xl text-center my-8">
            A demo video with throttled network
        </h2>
        <video controls class="w-full max-w-screen-md">
            <source src="demo.mp4" type="video/mp4" />
            <track kind="captions" />
        </video>
    </div>
</div>
