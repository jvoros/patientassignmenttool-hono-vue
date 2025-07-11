<script setup>
const toggleTheme = () => {
    const classes = document.documentElement.classList;
    const isDark = classes.contains("wa-dark");
    if (isDark) {
        classes.remove("wa-dark");
    } else {
        classes.add("wa-dark");
    }
};
</script>
<template>
    <wa-button size="small" appearance="filled" @click="toggleTheme">
        <wa-icon name="sun" variant="regular" class="sun"></wa-icon>
        <wa-icon name="moon" class="moon"></wa-icon>
    </wa-button>
</template>

<style scoped>
.sun,
.wa-dark .moon {
    display: none;
}

.wa-dark .sun,
.moon {
    display: inline-flex;
}
</style>
