<script setup>
import { inject } from "vue";

// props from basecont
// align: start, center, end
// side: top, bottom, left, right
//
// [data-popover] used by basecoat CSS
// aria-hidden controls transition

const { align, side } = defineProps(["align", "side"]);
const isOpen = inject("isOpen");
const close = () => {
    isOpen.value = false;
};
</script>

<template>
    <div
        data-popover
        :data-align="align"
        :data-side="side"
        :aria-hidden="!isOpen"
    >
        <slot :close="close"></slot>
    </div>
</template>

<style>
[data-popover],
[role="menuitem"] {
    /* make tooltips pop outside popover */
    overflow: visible;
}
</style>
