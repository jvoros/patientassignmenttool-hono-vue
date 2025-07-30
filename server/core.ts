import { Hono } from "hono";
import { jwt } from "hono/jwt";
import db from "../database/index.js";
import Board from "../core/index.js";
import { io } from "./index.js";

type Variables = {
  site: string;
};

const core = new Hono<{ Variables: Variables }>();

// middleware to get site from JWT token
core.use(jwt({ secret: process.env.JWT_SECRET!, cookie: "auth" }));
core.use(async (c, next) => {
  const payload = c.get("jwtPayload");
  c.set("site", payload.site);
  await next();
});

// core reducer

// one entry for each method of core
const handlers2 = [
  "reset",
  "undo",
  "signIn",
  "signOut",
  "joinZone",
  "leaveZone",
  "switchZone",
  "deleteShift",
  "adjustRotation",
  "togglePause",
  "assignToShift",
  "assignToZone",
  "reassign",
  "changeRoom",
];

type Action = {
  type: string;
  payload: object;
};

const reducer = (currentBoard: Board, action: Action): Board => {
  if (handlers2.includes(action.type)) {
    const { board, error } = Board[action.type](currentBoard, action.payload);
    if (error) throw error;
    return board;
  }
  return currentBoard;
};

// routes
core.all("/board", async (c) => {
  const res = await db.getBoard(c.get("site"));
  return c.json(res);
});

core.all("/site", async (c) => {
  const res = await db.getSite(c.get("site"));
  return c.json(res);
});

core.post("/action", async (c) => {
  const site = c.get("site");
  const action = await c.req.json();
  const { data, error } = await db.getBoard(site);
  if (error) return c.json({ data: "error", error });
  const currentBoard = JSON.parse(data.board);

  try {
    const newBoard = reducer(currentBoard, action);
    db.updateBoard(site, newBoard);
    io.to(site).emit("board", newBoard);
    return c.json({ data: "success", error: false });
  } catch (err: any) {
    console.log("caught error:", err);
    return c.json({ data: "error", error: err.message });
  }
});

export default core;
