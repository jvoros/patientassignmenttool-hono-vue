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
const handlers: Record<string, string> = {
  RESET: "reset",
  UNDO: "undo",
  SIGNIN: "signIn",
  SIGNOUT: "signOut",
  JOINZONE: "joinZone",
  LEAVEZONE: "leaveZone",
  SWITCHZONE: "switchZone",
  DELETESHIFt: "deleteShift",
  ADJUSTROTATION: "adjustRotation",
  TOGGLEPAUSE: "togglePause",
  ASSIGNTOSHIFT: "assignToShift",
  ASSIGNTOZONE: "assignToZone",
  REASSIGN: "reassign",
  CHANGEROOM: "changeRoom",
};

type Action = {
  type: string;
  payload: object;
};

const reducer = (currentBoard: Board, action: Action): Board => {
  const handler = handlers[action.type];
  if (handler) {
    return Board[handler](currentBoard, action.payload);
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
    io.to(site).emit("board", newBoard);
    return c.json({ data: "success", error: false });
  } catch (err) {
    return c.json({ data: "error", error: err });
  }
});

core.all("/test", async (c) => {
  const { data, error } = await db.getBoard(c.get("site"));
  console.log("BOARD:");
  console.log(JSON.parse(data.board));
  console.log("error:", error);
  return c.text("success");
});

export default core;
