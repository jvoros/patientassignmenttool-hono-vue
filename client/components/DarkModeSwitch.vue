<script setup>
import IconSun from "./IconSun.vue";
import IconMoon from "./IconMoon.vue";

const toggleTheme = () => {
  const classes = document.documentElement.classList;
  const isDark = classes.contains("dark");
  if (isDark) {
    classes.remove("dark");
  } else {
    classes.add("dark");
  }
};
</script>
<template>
  <button
    class="btn-icon-outline"
    data-tooltip="Toggle dark mode"
    data-side="bottom"
    @click="toggleTheme"
  >
    <IconSun class="sun" />
    <IconMoon class="moon" />
  </button>
</template>

<style scoped>
.sun,
.dark .moon {
  display: none;
}

.dark .sun,
.moon {
  display: block;
}
</style>
