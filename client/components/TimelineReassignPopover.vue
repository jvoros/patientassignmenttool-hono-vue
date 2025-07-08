<script setup>
import { ChevronDown } from "lucide-vue-next";
import { catchError } from "./store.js";
import Popover from "./Popover.vue";
import PopoverTrigger from "./PopoverTrigger.vue";
import PopoverPanel from "./PopoverPanel.vue";

const { name, heading, align, which } = defineProps([
    "name",
    "heading",
    "which",
    "align",
]);

const rooms = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];
const docs = ["Jeremy Voros", "Julius Ivring", "Doc Watson"];
const items = which === "room" ? rooms : docs;

const testError = () => {
    catchError(new Error("test error thrown."));
};
</script>

<template>
    <Popover :menu="true" class="reassign-popover">
        <PopoverTrigger>
            <div class="select">
                <h4>{{ name }}</h4>
                <ChevronDown class="reassign-chevron" size="14" />
            </div>
        </PopoverTrigger>
        <PopoverPanel :align="align">
            <div role="menu">
                <div role="heading">{{ heading }}:</div>
                <div role="menuitem" @click="testError">throw</div>
                <div role="menuitem" v-for="item in items">{{ item }}</div>
            </div>
        </PopoverPanel>
    </Popover>
</template>

<style scoped>
h4 {
    font-weight: 700;
    font-size: 1.25rem;
}

.select {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

svg {
    visibility: hidden;
}

.reassign-popover:hover svg {
    visibility: visible;
}

[role="menu"] {
    max-height: 20rem;
    overflow: scroll;
}

[role="menuitem"] {
    border-bottom: 1px solid var(--border);
}

[role="menuitem"]:last-of-type {
    border: 0;
}
</style>
