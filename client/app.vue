<script setup>
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

const board = getData();
</script>

<template>
  <h1>Vue Works</h1>
</template>
