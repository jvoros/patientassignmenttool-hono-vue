<script setup>
import { ListFilter } from "lucide-vue-next";

const { providers, setFilter } = defineProps([
    "providers",
    "setFilter",
    "filteredName",
]);

const handleClick = (item) => {
    setFilter(item);
};
</script>

<template>
    <wa-dropdown placement="bottom-end" distance="10">
        <button slot="trigger" class="unbutton">
            <span v-if="filteredName !== ''"> {{ filteredName }} </span>
            <span v-else> FILTER </span>
            <ListFilter size="14" slot="end" />
        </button>

        <template v-if="!filteredName">
            <h4>Show only:</h4>
            <wa-dropdown-item
                @click="handleClick(item)"
                v-for="item in providers"
            >
                {{ item }}
            </wa-dropdown-item>
        </template>
        <wa-dropdown-item @click="handleClick('')" v-else>
            <wa-icon name="xmark" slot="icon"></wa-icon> Clear Filter
        </wa-dropdown-item>
    </wa-dropdown>
</template>
