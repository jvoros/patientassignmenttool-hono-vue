<script setup>
import { onMounted } from "vue";
import {
    token,
    setToken,
    post,
    board,
    updateBoard,
} from "./components/store.js";

import Socket from "./components/Socket.vue";
import Header from "./components/Header.vue";
import Board from "./components/Board.vue";
import Login from "./components/Login.vue";

const checkLogin = async () => {
    const res = await post("/api/auth/checklogin");
    if (res.status === "noauth") {
        setToken(null);
    } else {
        setToken(res);
    }
};

onMounted(async () => {
    checkLogin();
    if (token) {
        const { data } = await post("/api/core/board");
        updateBoard(JSON.parse(data.board));
    }
});
</script>

<template>
    <Login v-if="!token" />
    <Socket v-else>
        <Header />
        <Board v-if="board" />
    </Socket>
</template>
