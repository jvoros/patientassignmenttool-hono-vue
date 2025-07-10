import { Server } from "socket.io";
import { verifyToken } from "./auth.js";

// helpers
const getAuthToken = async (socket) => {
  const cookieToken = parseCookies(socket.request.headers.cookie)?.auth;
  const payload = await verifyToken(cookieToken);
  if (payload?.status === "noauth") {
    return null;
  }
  return payload;
};

const parseCookies = (cookies) => {
  if (cookies === undefined) return {};
  const pairs = cookies.split("&");
  const parsed = {};
  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    parsed[key] = value;
  });
  return parsed;
};

// sockets
const useSocket = (honoServer) => {
  const io = new Server(honoServer);

  io.on("connection", async (socket) => {
    const token = socket.handshake.auth.token;
    const isAuth = await verifyToken(token);
    if (!isAuth) {
      socket.disconnect();
    } else {
      console.log("[socket] new connection:", socket.id);
      console.log("[socket] total connections: ", io.of("/").sockets.size);

      socket.on("room", async () => {
        console.log("received [room]");
        const payload = await getAuthToken(socket);
        console.log("[room] payload:", payload);
        if (payload) {
          console.log("websocket parsed auth token");
          socket.join(payload.site);
          console.log(`[socket](id: ${socket.id}) joined room ${payload.site}`);
          return { message: "success" };
        }
      });
    }
  });
};

export default useSocket;
