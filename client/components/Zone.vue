<script setup>
import { computed } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { board } from "./store.js";
import ZoneHeader from "./ZoneHeader.vue";
import Shift from "./Shift.vue";

const { slug } = defineProps(["slug"]);
const zone = computed(() => board.value.zones[slug]);
const instructions = `Instructions for ${zone.value.name}`;
const isRotation = ["rotation", "dual"].includes(zone.value.type);
const isSuperRot = ["dual", "super"].includes(zone.value.type);
const isNext = (ind) => {
  const z = zone.value;
  return [z.next === ind, z.type === "simple" && ind === 0].some((condition) => condition);
};
</script>

<template>
  <div class="zone">
    <ZoneHeader :title="zone.name" :inst="instructions" />
    <template v-for="(shiftId, index) in zone.shifts">
      <Shift
        :shiftId="shiftId"
        :zoneType="zone.type"
        :isNext="isNext(index)"
        :isSuper="zone.super === index"
      />
    </template>
    <div class="zone-controls" v-if="isRotation">
      <button class="btn-sm-outline" data-tooltip="Move rotation back">
        <ChevronLeft /> Rotation
      </button>
      <button class="btn-sm-outline" data-tooltip="Advance rotation">
        Rotation<ChevronRight />
      </button>
    </div>
    <div class="zone-controls" v-if="isSuperRot">
      <button class="btn-sm-outline" data-tooltip="Move supervisor back">
        <ChevronLeft /> Super
      </button>
      <button class="btn-sm-outline" data-tooltip="Advance supervisor">
        Super<ChevronRight />
      </button>
    </div>
  </div>
</template>

<style scoped>
.zone {
  margin-bottom: 4rem;
}

.zone-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>
