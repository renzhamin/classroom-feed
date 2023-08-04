// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { DefaultSession } from "@auth/core/types"

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

declare module "@auth/core/types" {
    interface Session {
        user: {} & DefaultSession["user"] & Your_Custom_Interfaces
        refresh_token: string | undefined
        access_token: string | undefined
        error: string | undefined
    }
}

export {}
