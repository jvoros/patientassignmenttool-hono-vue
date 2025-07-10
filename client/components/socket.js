import { ref } from "vue";
import io from "socket.io-client";

export const state = ref({
  connected: false,
});

export const socket = io();

socket.on("connection", (msg) => {
  state.connected = true;
  console.log("[socket](connection)", msg);
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("message", (msg) => {
  console.log("[socket] (message)", msg);
});

socket.on("board", (value) => {
  console.log(`[socket] (board) new board`);
  // site.updateBoard(value);
});
