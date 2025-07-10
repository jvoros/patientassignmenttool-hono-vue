<script setup>
import { onMounted, onUnmounted } from "vue";
import io from "socket.io-client";
import { token, socketConnected } from "./store.js";

const socket = io({ auth: { token: token.value } }, () => {
    console.log("socket.io connection cb");
});

socket.on("connect", (msg) => {
    socketConnected.value = true;
    console.log("[socket] connected");
});

socket.on("disconnect", () => {
    console.log("[socket] disconnected");
    socketConnected.value = false;
});

socket.on("message", (msg) => {
    console.log("[socket] (message)", msg);
});

socket.on("board", (value) => {
    console.log(`[socket] (board) new board`);
    // site.updateBoard(value);
});

onMounted(() => {
    socket.connect();
});

onUnmounted(() => {
    socket.disconnect();
});
</script>

<template>
    <slot></slot>
</template>
