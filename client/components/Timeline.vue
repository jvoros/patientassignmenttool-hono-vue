<script setup>
import { computed } from "vue";
import { Undo2 } from "lucide-vue-next";
import { board } from "./store.js";
import ZoneHeader from "./ZoneHeader.vue";
import TimelineNode from "./TimelineNode.vue";

const timeline = computed(() => board.value.timeline.map((eventId) => board.value.events[eventId]));
</script>

<template>
  <ZoneHeader title="Timeline" inst="Click a name or room number to reassign." />
  <section class="tl-line">
    <template v-for="(event, index) in timeline">
      <TimelineNode :event="event" />
      <div class="undo" v-if="index === 0">
        <button class="btn-sm-icon-outline" data-tooltip="Undo"><Undo2 /></button>
      </div>
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
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}
</style>
