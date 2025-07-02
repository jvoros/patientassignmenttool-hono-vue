<script setup>
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import IconMode from "./IconMode.vue";
import Popover from "./Popover.vue";

const selectedMode = ref("");
const selectedRoom = ref("");

const modes = [
  { tool: "walk in", slug: "walkin" },
  { tool: "fast track", slug: "ft" },
  { tool: "ambo", slug: "ambo" },
  { tool: "police", slug: "police" },
];

const setMode = (mode) => {
  selectedMode.value = mode;
};

const isComplete = computed(() =>
  selectedMode.value !== "" && selectedRoom.value !== "" ? true : false
);

const resetRefs = () => {
  const refs = [selectedMode, selectedRoom];
  refs.forEach((ref) => {
    ref.value = "";
  });
};
</script>

<template>
  <Popover align="center" @close="resetRefs()">
    <template #trigger>
      <button class="btn" popover-target="assign-popover">Assign <ChevronDown /></button>
    </template>
    <div class="assign-popover">
      <div class="modes">
        <button
          v-for="mode in modes"
          class="btn-sm-icon-outline"
          :data-tooltip="mode.tool"
          @click="setMode(mode.slug)"
          :disabled="selectedMode === mode.slug"
        >
          <IconMode :mode="mode.slug" />
        </button>
      </div>

      <div>
        <select class="select" v-model="selectedRoom">
          <option disabled value="">Room:</option>
          <option value="apple">Apple</option>
          <option>Banana</option>
          <option>Blueberry</option>
          <option>Grapes</option>
          <option>Pineapple</option>
        </select>
      </div>

      <button class="btn submit" :disabled="!isComplete">Assign</button>
    </div>
  </Popover>
</template>

<style scoped>
.assign-popover {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: visible;
}

.modes {
  display: flex;
  gap: 0.5rem;
}

select {
  width: 10rem;
}

.submit {
  width: 100%;
}
</style>
