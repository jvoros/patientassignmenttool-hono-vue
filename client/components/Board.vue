<script setup>
import { board } from "../store.js";
import BoardGrid from "./BoardGrid.vue";
import Timeline from "./Timeline.vue";
import Zone from "./Zone.vue";
</script>

<template>
  <BoardGrid class="container">
    <template #timeline>
      <Timeline />
    </template>
    <template #main>
      <Zone :slug="board.zoneOrder[0]" />
    </template>
    <template #other>
      <template v-for="slug in board.zoneOrder.slice(1)">
        <Zone :slug="slug" />
      </template>
    </template>
  </BoardGrid>
</template>
