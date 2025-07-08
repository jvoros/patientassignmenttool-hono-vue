<script setup>
import { ListFilter } from "lucide-vue-next";
import Popover from "./Popover.vue";
import PopoverTrigger from "./PopoverTrigger.vue";
import PopoverPanel from "./PopoverPanel.vue";

const { providers, setFilter } = defineProps([
    "providers",
    "setFilter",
    "filteredName",
]);

const handleClick = (item, close) => {
    setFilter(item);
    close();
};
</script>

<template>
    <Popover align="end" :menu="true" :isOpen="false">
        <PopoverTrigger>
            <button class="filter-button" data-tooltip="Filter by clinician">
                <span v-if="filteredName !== ''">
                    FILTERED: {{ filteredName }}
                </span>
                <span v-else> FILTER </span>
                <ListFilter size="14" />
            </button>
        </PopoverTrigger>
        <PopoverPanel align="end" v-slot="{ close }">
            <div role="menu">
                <div role="heading">Show Only:</div>
                <template v-for="item in providers">
                    <div role="menuitem" @click="handleClick(item, close)">
                        {{ item }}
                    </div>
                </template>
                <hr role="separator" />
                <div role="menuitem" @click="handleClick('', close)">
                    Show All Events
                </div>
            </div>
        </PopoverPanel>
    </Popover>
</template>

<style scoped>
.filter-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-muted);
    cursor: pointer;
}
</style>
