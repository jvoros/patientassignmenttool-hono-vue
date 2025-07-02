<script setup>
import { Activity, Info, UserPlus, Zap, Siren } from "lucide-vue-next";
const { mode, size } = defineProps(["mode", "size"]);
const iconSize = size ?? 18;
</script>
<template>
  <Info :size="iconSize" v-if="mode === 'info'" />
  <Activity :size="iconSize" v-if="mode === 'ambo'" />
  <UserPlus :size="iconSize" v-if="mode === 'walkin'" />
  <Siren :size="iconSize" v-if="mode === 'police'" />
  <Zap :size="iconSize" v-if="mode === 'ft'" />
</template>
