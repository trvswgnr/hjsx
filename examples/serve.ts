import { Page } from "./components";

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const body = Page.render();
        return new Response(body, {
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
});

console.log(`Listening on ${server.url}`);
