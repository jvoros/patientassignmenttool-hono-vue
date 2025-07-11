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
    <wa-dropdown distance="10" class="reassign-popover">
        <button class="unbutton" slot="trigger">
            <span class="name">{{ name }}</span>
            <wa-icon name="angle-down" class="reassign-chevron"></wa-icon>
        </button>
        <h4>{{ heading }}</h4>
        <wa-scroller orientation="vertical" style="max-height: 300px">
            <wa-dropdown-item v-for="item in items">
                {{ item }}
            </wa-dropdown-item>
        </wa-scroller>
    </wa-dropdown>
</template>

<style scoped>
.name {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--text-color);
}

.reassign-chevron {
    visibility: hidden;
}

.reassign-popover:hover .reassign-chevron {
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
