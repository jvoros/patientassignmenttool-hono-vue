<script setup>
import { Info, Activity, UserPlus, Siren, Zap } from "lucide-vue-next";
const { icon } = defineProps(["icon"]);

const iconClass = `tl-icon-${icon}`;
</script>

<template>
  <div class="tl-icon" :class="iconClass">
    <Info size="18" v-if="icon === 'info'" />
    <Activity size="18" v-if="icon === 'ambo'" />
    <UserPlus size="18" v-if="icon === 'walkin'" />
    <Siren size="18" v-if="icon === 'police'" />
    <Zap size="18" v-if="icon === 'ft'" />
  </div>
</template>

<style scoped>
.tl-icon {
  --icon-color: var(--text-muted);
  --icon-border: var(--icon-color);
  --icon-background: var(--background);
  border-radius: var(--radius-round);
  border: 1px solid var(--icon-border);
  display: inline-block;
  padding: calc(var(--tl-icon-size) / 4);
  color: var(--icon-color);
  background-color: var(--icon-background);
  margin-left: calc(((var(--tl-icon-size) * -1.5) / 2) - 2px);
}

.tl-icon-info {
  --icon-border: var(--background);
}

.tl-icon-ft {
  --icon-color: green;
  --icon-background: lightgreen;
}

.tl-icon-ambo {
  --icon-color: red;
  --icon-background: pink;
}

.tl-icon-walkin {
  --icon-color: yellow;
  --icon-background: lightyellow;
}

.tl-icon-police {
  --icon-color: blue;
  --icon-background: lightblue;
}
</style>
