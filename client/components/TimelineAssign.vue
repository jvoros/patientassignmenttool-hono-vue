<script setup>
import { ChevronDown } from "lucide-vue-next";
import { board, formatTime } from "./store.js";
import Popover from "./Popover.vue";
const { event } = defineProps(["event"]);
event.assign = `${board.value.shifts[event.assign].first} ${board.value.shifts[event.assign].last}`;
const rooms = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
];
</script>

<template>
  <div class="assign">
    <div>
      <div class="time">{{ formatTime(event.time) }}</div>
      <div>
        <Popover :menu="true">
          <template #trigger>
            <div class="reassign-select">
              <span class="provider">{{ event.assign }}</span>
              <span class="chevron"><ChevronDown size="14" /></span>
            </div>
          </template>
          <div class="reassign-list" role="menu">
            <div role="heading">Reassign to:</div>
            <div role="menuitem">Jeremy Voros</div>
          </div>
        </Popover>
      </div>
      <div class="message" v-if="event.message">{{ event.message }}</div>
      <div class="message" v-if="event.note">{{ event.note }}</div>
    </div>
    <div>
      <Popover :menu="true">
        <template #trigger>
          <div class="reassign-select">
            <span class="room">{{ event.room }}</span>
            <span class="chevron"><ChevronDown size="14" /></span>
          </div>
        </template>
        <div class="reassign-room" role="menu">
          <div role="heading">New Room:</div>
          <template v-for="room in rooms">
            <div role="menuitem">{{ room }}</div>
          </template>
        </div>
      </Popover>
    </div>
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
  font-size: 1.25rem;
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

.reassign-select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chevron {
  visibility: hidden;
}

.assign:hover .chevron {
  visibility: visible;
}

.reassign-room {
  max-height: 15rem;
  overflow-y: scroll;
}

[role="menuitem"] {
  border-bottom: 1px solid var(--border);
}

[role="menuitem"]:last-of-type {
  border: 0;
}
</style>
