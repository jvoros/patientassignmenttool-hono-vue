<script setup>
import { ref, computed } from "vue";
import { Stethoscope, ChevronDown } from "lucide-vue-next";
import Popover from "./Popover.vue";

const selectedClinician = ref("");
const selectedShift = ref("");
const resets = [selectedClinician, selectedShift];
const isComplete = computed(() => resets.every((el) => el.value !== ""));
</script>

<template>
  <Popover align="center" :resets="resets">
    <template #trigger>
      <button class="btn"><Stethoscope /> Add Clinician <ChevronDown /></button>
    </template>
    <div class="content" style="width: 12rem">
      <select class="select" v-model="selectedClinician">
        <option disabled value="">Clinician:</option>
        <option value="apple">Apple</option>
        <option>Banana</option>
        <option>Blueberry</option>
        <option>Grapes</option>
        <option>Pineapple</option>
      </select>
      <select class="select" v-model="selectedShift">
        <option disabled value="">Shift:</option>
        <option value="apple">Apple</option>
        <option>Banana</option>
        <option>Blueberry</option>
        <option>Grapes</option>
        <option>Pineapple</option>
      </select>
      <button class="btn" :disabled="!isComplete">Add to Board</button>
    </div>
  </Popover>
</template>

<style scoped>
.content > * {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>
