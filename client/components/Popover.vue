<script setup>
import { ref, useTemplateRef, onMounted, onUnmounted } from "vue";
// properties from basecoat:
// align: [start], center, end
// side: [bottom], top, right, left
const { align, side, menu } = defineProps(["align", "side", "menu"]);

// open & close
// basecoat transition based on 'aria-hidden' property
const isOpen = ref(false);
const toggleState = () => (isOpen.value = !isOpen.value);

// click outside
// emit 'close' so parent can reset refs
const emit = defineEmits(["close"]);
const component = useTemplateRef("popover");
const outsideClick = (event) => {
  if (isOpen.value && !component.value.contains(event.target)) {
    toggleState();
    emit("close");
  }
};

onMounted(() => {
  document.addEventListener("click", outsideClick);
  console.log("menu: ", menu);
});

onUnmounted(() => {
  document.removeEventListener("click", outsideClick);
});
</script>

<!-- built on basecoat.css -->
<!-- wrapper '.dropdown-menu' needed for menu, no effect is menu roles not used -->
<!-- wrapper '.popover' required -->
<!-- content 'data-popover' and 'aria-hidden' required -->
<template>
  <div class="my-popover" :class="{ 'dropdown-menu': menu }">
    <div class="popover" ref="popover">
      <span @click="toggleState" class="trigger"><slot name="trigger"></slot></span>
      <div data-popover :data-align="align" :data-side="side" :aria-hidden="!isOpen">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trigger {
  cursor: pointer;
}

[data-popover] {
  overflow: visible;
}

.dropdown-menu [data-popover] {
  padding: 0.5rem 0.25rem;
}
</style>
