<script setup>
import { ref, provide } from "vue";

const isOpen = ref(false);
provide("isOpen", isOpen);
</script>

<template>
    <div
        role="menuitem"
        @mouseover="isOpen = true"
        @mouseleave="isOpen = false"
    >
        <slot></slot>
    </div>
</template>
