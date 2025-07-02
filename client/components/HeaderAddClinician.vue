<script setup>
import { ref } from "vue";
import { Stethoscope } from "lucide-vue-next";
import Popover from "./Popover.vue";
</script>

<template>
  <Popover align="center" @close="console.log('add clinician popover close')">
    <template #trigger>
      <button class="btn"><Stethoscope /> Add Clinician <ChevronDown /></button>
    </template>
    <div style="width: 20rem">add clinician popover</div>
  </Popover>
</template>
