<script setup>
import { computed } from "vue";
import { board } from "../store.js";
import BoardHeader from "./BoardHeader.vue";
import Shift from "./Shift.vue";

const { slug } = defineProps(["slug"]);
const zone = computed(() => board.value.zones[slug]);
</script>

<template>
  <div class="zone">
    <BoardHeader :title="zone.name" inst="Zone instructions go here." />
    <template v-for="shiftId in zone.shifts">
      <Shift :shiftId="shiftId" />
    </template>
  </div>
</template>

<style scoped>
.zone {
  margin-bottom: 4rem;
}
</style>
