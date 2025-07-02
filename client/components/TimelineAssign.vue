<script setup>
import { board, formatTime } from "../store.js";
const { event } = defineProps(["event"]);
event.assign = `${board.value.shifts[event.assign].first} ${board.value.shifts[event.assign].last}`;
</script>

<template>
  <div class="assign">
    <div>
      <div class="time">{{ formatTime(event.time) }}</div>
      <div class="provider">{{ event.assign }}</div>
      <div class="message" v-if="event.message">{{ event.message }}</div>
      <div class="message" v-if="event.note">{{ event.note }}</div>
    </div>
    <div class="room">{{ event.room }}</div>
  </div>
</template>

<style scoped>
.assign {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-highlight);
  padding: var(--padding-half);
}

.provider,
.room {
  font-weight: 700;
  font-size: 1.5rem;
}

.room {
  padding-right: 1rem;
}

.time,
.message {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.main {
  padding-right: 1rem;
}

.main:last-of-type {
  margin-bottom: 0.75rem;
}
</style>
