// @ts-ignore
import { turso } from "./client.js";

const query = async (sql: string, args: any) => {
  try {
    const data = await turso.execute({ sql, args });
    return { data: data.rows[0], error: false };
  } catch (err) {
    return { error: err };
  }
};

const getBoardSql = `
  SELECT board
  FROM sites
  WHERE slug = :slug
  `;

const updateBoardSql = `
  UPDATE sites
  SET board = :newBoard
  WHERE slug = :slug
  `;

const getSiteSql = `
  SELECT site
  FROM sites
  WHERE slug = :slug
  `;

const updateLogsSql = `
  INSERT INTO logs
  `;

export default {
  getBoard: async (slug: string) => await query(getBoardSql, { slug }),

  updateBoard: async (slug: string, newBoard: Board) => {
    return query(updateBoardSql, { slug, newBoard: JSON.stringify(newBoard) });
  },

  getSite: async (slug: string) => await query(getSiteSql, { slug }),
};
