<script setup>
import { computed } from "vue";
import { board } from "./store.js";
import ShiftMenu from "./ShiftMenu.vue";
import ShiftAssignPopover from "./ShiftAssignPopover.vue";

const { shiftId, isNext, isSuper } = defineProps(["shiftId", "isNext", "isSuper"]);

const shift = computed(() => board.value.shifts[shiftId]);
</script>

<template>
  <div class="shift" :class="{ next: isNext }">
    <div v-if="isNext" class="nextFlag">NEXT</div>
    <div class="menubar">
      <span class="shiftName">{{ shift.name }}</span>
      <div class="menu"><ShiftMenu /></div>
    </div>
    <div class="content">
      <div>
        <div class="provider">{{ shift.first }} {{ shift.last }}</div>
        <div class="counts">
          Total: {{ shift.assigned + shift.supervised }} • Supervised: {{ shift.supervised }}
        </div>
      </div>
      <div class="buttons">
        <span class="badge" v-if="isSuper">SUPER</span>
        <ShiftAssignPopover v-if="isNext" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.shift {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  background-color: var(--bg-highlight);
}

.menubar {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  background-color: var(--bg-muted);
  color: var(--text-muted);
}

.next > .menubar {
  background-color: var(--bg-next-menu);
}

.shiftName {
  text-transform: uppercase;
  font-weight: 700;
}

.menu {
  cursor: pointer;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-half);
  border-bottom-right-radius: var(--border);
  border-bottom-left-radius: var(--border);
}

.provider {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
}

.counts {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--text-muted);
}

.buttons {
  display: flex;
  align-items: center;
}

.next {
  border-color: var(--color-amber-300);
  /* box-shadow: 0px 0px 2px 5px var(--color-amber-100); */
  background-color: var(--bg-next);
}

.nextFlag {
  background-color: var(--color-amber-300);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.badge {
  background-color: var(--color-blue-400);
  margin-right: 0.5rem;
}
</style>
