<script setup>
import { computed } from "vue";

import { board } from "../store.js";
import ShiftMenu from "./ShiftMenu.vue";

const { shiftId } = defineProps(["shiftId"]);

const shift = computed(() => board.value.shifts[shiftId]);
</script>

<template>
  <div class="shift">
    <div class="menubar">
      <span>{{ shift.name }}</span>
      <div class="menu"><ShiftMenu /></div>
    </div>
    <div class="content">
      <div class="provider">
        {{ shift.first }} {{ shift.last }}
        <div class="counts">
          Total: {{ shift.assigned + shift.supervised }} • Supervised: {{ shift.supervised }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shift {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  background-color: white;
}

.menubar {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--text-muted);
  background-color: var(--border);
}

.menu {
  cursor: pointer;
}

.content {
  border-bottom-right-radius: var(--border);
  border-bottom-left-radius: var(--border);
}

.provider {
  font-weight: 700;
  font-size: 1.5rem;
  padding: var(--padding-half);
}

.counts {
  font-family: var(--font-monospace-code);
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--text-muted);
}
</style>
