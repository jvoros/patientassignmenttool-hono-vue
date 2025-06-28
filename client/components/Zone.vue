<script setup>
import { computed } from "vue";
import { board } from "../store.js";
import BoardHeader from "./BoardHeader.vue";

const { slug } = defineProps(["slug"]);
const zone = computed(() => board.value.zones[slug]);
</script>

<template>
  <div class="zone">
    <BoardHeader :title="zone.name" inst="Zone instructions go here." />
  </div>
</template>

<style scoped>
.zone {
  margin-bottom: 4rem;
}
</style>
