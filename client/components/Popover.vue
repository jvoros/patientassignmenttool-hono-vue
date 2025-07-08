<script setup>
import { ref, useTemplateRef, onMounted, onUnmounted, provide } from "vue";
// properties from basecoat:
// menu: bool, should it apply .dropdown-menu class to style menu
// resets: ref[], will set all to '' on close
const { menu, resets } = defineProps(["menu", "resets"]);

const isOpen = ref(false);
provide("isOpen", isOpen);

// click outside
const component = useTemplateRef("popover");
const outsideClick = (event) => {
    if (isOpen.value && !component.value.contains(event.target)) {
        isOpen.value = false;
        if (resets !== undefined) {
            resets.forEach((ref) => {
                ref.value = "";
            });
        }
    }
};

onMounted(() => {
    document.addEventListener("click", outsideClick);
});

onUnmounted(() => {
    document.removeEventListener("click", outsideClick);
});
</script>

<!-- built on basecoat.css -->
<!-- wrapper '.dropdown-menu' needed for menu, no effect if menu roles not used -->
<!-- wrapper '.popover' required -->
<template>
    <div class="my-popover" :class="{ 'dropdown-menu': menu }">
        <div class="popover" ref="popover">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.dropdown-menu [data-popover] {
    padding: 0.5rem 0.25rem;
}
</style>
