<script setup>
import { LogOut } from "lucide-vue-next";

import { post, setToken, socketConnected } from "./store.js";
import HeaderAddClinician from "./HeaderAddClinician.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";

const logout = async () => {
    const res = await post("/api/auth/logout");
    if (res.status === "success") setToken(null);
};
</script>

<template>
    <header class="container">
        <div>
            <img src="/public/pat.svg" alt="Patient Assignment Tool Logo" />
            <h1>Patient Assignment Tool <span>v 1.0</span></h1>
        </div>
        <nav>
            <div class="socket-status" v-if="!socketConnected">
                Error: no socket connection.
            </div>
            <HeaderAddClinician />
            <button class="btn-secondary" @click="logout">
                Logout <LogOut />
            </button>
            <DarkModeSwitch />
        </nav>
    </header>
</template>

<style scoped>
header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

div {
    display: flex;
    align-items: center;
    gap: 1rem;
}

img {
    width: 48px;
}

h1 {
    font-size: 1.5rem;
    font-weight: 700;
}

h1 span {
    font-size: 1rem;
    font-weight: normal;
}

nav {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.socket-status {
    font-family: var(--font-mono);
    color: var(--text-muted);
    font-size: 0.8rem;
}
</style>
