import { turso } from "./client.js";

const getBoardSql = `
  SELECT board
  FROM sites
  WHERE slug = :slug
  `;

export const getBoard = async (slug) => {
  try {
    const data = await turso.execute({
      sql: getBoardSql,
      args: { slug },
    });
    return { board: data.rows[0].board, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};

const updateBoardSql = `
  UPDATE sites
  SET board = :newBoard
  WHERE slug = :slug
  `;

export const updateBoard = async (slug, newBoard) => {
  try {
    const data = await turso.execute({
      sql: updateBoardSql,
      args: { slug, newBoard: JSON.stringify(newBoard) },
    });
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};
