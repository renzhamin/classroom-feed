const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  a + "/_app/immutable/entry/app.ba286bf6.js",
  a + "/_app/immutable/assets/0.6b72d574.css",
  a + "/_app/immutable/nodes/0.e0e1d7a8.js",
  a + "/_app/immutable/nodes/1.8cb0a9e2.js",
  a + "/_app/immutable/nodes/2.871d6326.js",
  a + "/_app/immutable/nodes/3.eb1e85d5.js",
  a + "/_app/immutable/chunks/index.339c83b0.js",
  a + "/_app/immutable/chunks/navigation.4a14f299.js",
  a + "/_app/immutable/chunks/scheduler.433f0f0f.js",
  a + "/_app/immutable/chunks/singletons.2f50626b.js",
  a + "/_app/immutable/chunks/stores.a608d631.js",
  a + "/_app/immutable/entry/start.3fad91f0.js"
], l = [
  a + "/apple-touch-icon-180x180.png",
  a + "/favicon.ico",
  a + "/favicon.png",
  a + "/final.png",
  a + "/maskable-icon-512x512.png",
  a + "/page-shot.webp",
  a + "/pwa-192x192.png",
  a + "/pwa-512x512.png",
  a + "/pwa-64x64.png"
], u = "1691228595801", i = `cache-${u}`, p = [
  ...o,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), n = await caches.open(i);
    if (p.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && n.put(e.request, c.clone()), c;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(t());
});
