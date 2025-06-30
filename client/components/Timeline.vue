<script setup>
import { computed } from "vue";
import { board } from "../store.js";
import { Button } from "ant-design-vue";
import BoardHeader from "./BoardHeader.vue";
import TimelineNode from "./TimelineNode.vue";

const timeline = computed(() => board.value.timeline.map((eventId) => board.value.events[eventId]));
</script>

<template>
  <BoardHeader title="Timeline" inst="Timeline instructions go here." />
  <section class="tl-line">
    <template v-for="(event, index) in timeline">
      <TimelineNode :event="event" />
      <div class="undo" v-if="index === 0"><Button>Undo</Button></div>
    </template>
  </section>
</template>

<style scoped>
.tl-line {
  border-left: 2px solid var(--border);
  margin-left: calc(var(--tl-icon-size) * 1.5 / 2);
}

.undo {
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
}
</style>
