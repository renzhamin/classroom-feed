/* import { building } from "$app/environment" */
/* import { Redis } from "@upstash/redis" */
/* import { Ratelimit } from "@upstash/ratelimit" */
/* import { */
/*     UPSTASH_REDIS_REST_TOKEN, */
/*     UPSTASH_REDIS_REST_URL, */
/* } from "$env/static/private" */
/**/
/* let redis: Redis */
/* let ratelimit: Ratelimit */
/**/
/* if (!building) { */
/*     redis = new Redis({ */
/*         url: UPSTASH_REDIS_REST_URL, */
/*         token: UPSTASH_REDIS_REST_TOKEN, */
/*     }) */
/**/
/*     ratelimit = new Ratelimit({ */
/*         redis, */
/*         limiter: Ratelimit.slidingWindow(5, "10 s"), */
/*     }) */
/* } */
/**/
/* export const handle = async ({ event, resolve }) => { */
/*     if (event.url.pathname.startsWith("/api")) { */
/*     } */
/**/
/*     const response = await resolve(event) */
/*     return response */
/* } */
