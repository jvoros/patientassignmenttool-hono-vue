<script setup>
import { ChevronDown } from "lucide-vue-next";
import Popover from "./Popover.vue";
const { name, heading, items, align } = defineProps(["name", "heading", "items", "align"]);
</script>

<template>
  <Popover :menu="true" :align="align" class="reassign-popover">
    <template #trigger>
      <div class="select">
        <h4>{{ name }}</h4>
        <ChevronDown size="14" class="chevron" />
      </div>
    </template>
    <div role="menu">
      <div role="heading">{{ heading }}:</div>
      <div role="menuitem" v-for="item in items">{{ item }}</div>
    </div>
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

.chevron {
  visibility: hidden;
}

.reassign-popover:hover .chevron {
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
