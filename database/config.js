import { turso } from "./client.js";
import sites from "../sites/index.js";

const sql = `
  INSERT INTO sites (slug, config)
  VALUES (:slug, :config)
  ON CONFLICT (slug)
  DO UPDATE SET config = excluded.config
  `;

sites.forEach(async (site) => {
  try {
    await turso.execute({
      sql: sql,
      args: { slug: site.slug, config: JSON.stringify(site) },
    });
    console.log(`[config] updated: ${site.name}`);
  } catch (err) {
    console.error(err);
  }
});
