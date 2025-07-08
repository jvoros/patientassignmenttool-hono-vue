<script setup>
import { onMounted } from "vue";
import { user, setUser, post } from "./components/store.js";
import Header from "./components/Header.vue";
import Board from "./components/Board.vue";
import Login from "./components/Login.vue";

const checkLogin = async () => {
    const res = await post("/api/auth/checklogin");
    if (res.status === "noauth") setUser(null);
    if (res.id !== undefined) setUser(res.id);
};

onMounted(() => {
    checkLogin();
});
</script>

<template>
    <template v-if="user">
        <Header />
        <Board />
    </template>

    <Login v-else />
</template>
