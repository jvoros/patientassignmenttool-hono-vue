<script setup>
import { Info, UserPlus, Zap, Siren, Shield } from "lucide-vue-next";
const { mode, size } = defineProps(["mode", "size"]);
const iconSize = size ?? 18;
</script>
<template>
  <Info :size="iconSize" v-if="mode === 'info'" />
  <Siren :size="iconSize" v-if="mode === 'ambo'" />
  <UserPlus :size="iconSize" v-if="mode === 'walkin'" />
  <Shield :size="iconSize" v-if="mode === 'police'" />
  <Zap :size="iconSize" v-if="mode === 'ft'" />
</template>
