<script setup>
import { formatTime } from "./store.js";
import TimelineIcon from "./TimelineIcon.vue";
import TimelineInfo from "./TimelineInfo.vue";
import TimelineAssign from "./TimelineAssign.vue";

const { event } = defineProps(["event"]);
const mode = event.assign ? event.mode : "info";
</script>
<template>
  <div class="tl-node">
    <TimelineIcon :mode="mode" />
    <div class="tl-event">
      <TimelineAssign :event="event" v-if="event.assign !== undefined" />
      <TimelineInfo :time="formatTime(event.time)" :message="event.message" v-else />
    </div>
  </div>
</template>

<style scoped>
.tl-node {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
}

.tl-node:first-of-type {
  padding-bottom: 1rem;
}

.tl-event {
  width: 100%;
}
</style>
