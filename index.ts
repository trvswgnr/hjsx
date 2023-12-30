import { Page } from "./components";
import { renderToString } from "./jsx";
Bun.serve({
    port: 3000,
    async fetch(req) {
        const body = renderToString(Page());
        return new Response(body, {
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
});

console.log("Listening on http://localhost:3000");