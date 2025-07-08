<script setup>
import { inject } from "vue";

const isOpen = inject("isOpen");
</script>

<template>
    <div class="submenu" role="menu" data-popover :class="{ open: isOpen }">
        <slot></slot>
    </div>
</template>

<style>
.submenu {
    position: absolute;
    left: 100%;
    top: -1rem;
    transform: translateX(-1rem);
    opacity: 0;
    visibility: hidden;
}

.submenu.open {
    transform: translateX(0);
    opacity: 1;
    transition: var(--transition);
    visibility: visible;
}
</style>
