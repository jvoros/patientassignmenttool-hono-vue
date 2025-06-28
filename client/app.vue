<script setup>
import Header from "./components/header.vue";
import Board from "./components/board.vue";

async function getData() {
  const url = "./api/board";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
</script>

<template>
  <Header />
  <Board />
</template>
