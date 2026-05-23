importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js');

const uv = new UVServiceWorker();

async function handleRequest(event) {
    if (uv.route(event)) {
        return await uv.fetch(event);
    }
    return await fetch(event.request);
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
