<script setup>
import { board, formatTime } from "../store.js";
const { event } = defineProps(["event"]);
event.assign = `${board.value.shifts[event.assign].first} ${board.value.shifts[event.assign].last}`;
</script>
<template>
  <div class="assign">
    <div class="time">{{ formatTime(event.time) }}</div>
    <div class="main">
      <span>{{ event.assign }}</span>
      <span>{{ event.room }}</span>
    </div>
    <div class="message" v-if="event.message">{{ event.message }}</div>
    <div class="message" v-if="event.note">{{ event.note }}</div>
  </div>
</template>

<style scoped>
.assign {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: white;
  padding: var(--padding-half);
}

.time,
.message {
  font-family: var(--font-monospace-code);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.5rem;
  padding-right: 1rem;
}

.main:last-of-type {
  margin-bottom: 0.75rem;
}
</style>
