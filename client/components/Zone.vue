<script setup>
import { computed } from "vue";
import { board } from "../store.js";
import BoardHeader from "./BoardHeader.vue";
import Shift from "./Shift.vue";

const { slug } = defineProps(["slug"]);
const zone = computed(() => board.value.zones[slug]);
const instructions = `Instructions for ${zone.value.name}`;
</script>

<template>
  <div class="zone">
    <BoardHeader :title="zone.name" :inst="instructions" />
    <template v-for="(shiftId, index) in zone.shifts">
      <Shift :shiftId="shiftId" :isNext="zone.next === index" :isSuper="zone.super === index" />
    </template>
  </div>
</template>

<style scoped>
.zone {
  margin-bottom: 4rem;
}
</style>
