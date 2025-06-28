<script setup>
const { title, inst } = defineProps(["title", "inst"]);
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <aside>{{ inst }}</aside>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

aside {
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--padding-half);
}
</style>
