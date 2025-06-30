<script setup>
import { ConfigProvider } from "ant-design-vue";
import { contextHolder } from "./store.js";

const info = () => {
  messageApi.info("Hello, Ant Design Vue!");
};
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
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#27272a', //zinc-800
      },
    }"
  >
    <contextHolder />
    <Header />
    <Board />
  </ConfigProvider>
</template>
