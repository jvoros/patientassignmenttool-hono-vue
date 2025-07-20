import { createClient } from "@libsql/client";
import sites from "../sites/index.js";

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const sql = `
  INSERT INTO sites (slug, config)
  VALUES (:slug, :config)
  ON CONFLICT (slug)
  DO UPDATE SET
  config = excluded.config
  `;

sites.forEach(async (site) => {
  try {
    await turso.execute({
      sql: sql,
      args: { slug: site.slug, config: JSON.stringify(site) },
    });
    console.log("updated config for:", site.name);
  } catch (err) {
    console.error(err);
  }
});
