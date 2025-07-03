<script setup>
import { board, formatTime } from "./store.js";
import TimelineReassignPopover from "./TimelineReassignPopover.vue";
const { event } = defineProps(["event"]);
event.assign = `${board.value.shifts[event.assign].first} ${board.value.shifts[event.assign].last}`;
const rooms = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
];
const docs = ["Jeremy Voros", "Julius Ivring", "Doc Watson"];
</script>

<template>
  <div class="assign">
    <div>
      <div class="time">{{ formatTime(event.time) }}</div>
      <TimelineReassignPopover
        :name="event.assign"
        heading="Reassign to"
        :items="docs"
        align="start"
      />
      <div class="message" v-if="event.message">{{ event.message }}</div>
      <div class="message" v-if="event.note">{{ event.note }}</div>
    </div>

    <TimelineReassignPopover :name="event.room" heading="New Room" :items="rooms" align="center" />
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

.assign:hover .reassign-chevron {
  visibility: visible;
}

.time,
.message {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
