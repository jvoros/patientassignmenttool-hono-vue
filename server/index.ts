import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

import auth from "./auth.js";

const app = new Hono();

app.all("api/board", (c) => {
  return c.json({ data: "success" });
});

app.route("api/auth", auth);

// VITE routes

// paths relative to project root, not this file
// client/assets
app.use("/assets/*", serveStatic({ root: "./dist/client" }));
// client/public
app.use("/*", serveStatic({ root: "./dist/client/" }));
// client/index.html
app.use("/", serveStatic({ path: "./dist/client/index.html" }));

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
