<script setup>
import { inject } from "vue";
const isOpen = inject("isOpen");
</script>
<template>
    <span @click="isOpen = !isOpen">
        <slot></slot>
    </span>
</template>
<style scoped>
span {
    cursor: pointer;
}
</style>
