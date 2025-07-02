<script setup>
import { Menu } from "lucide-vue-next";
import Popover from "./Popover.vue";
</script>

<template>
  <Popover align="end" :menu="true">
    <template #trigger>
      <button style="cursor: pointer"><Menu size="14" /></button>
    </template>
    <div role="menu">
      <div role="group">
        <div role="heading">My Account</div>
        <div role="menuitem">Profile</div>
        <div role="menuitem">Billing</div>
        <div role="menuitem">Settings</div>
        <div role="menuitem">Keyboard shortcuts</div>
      </div>
      <hr role="separator" />
      <div role="menuitem">GitHub</div>
      <div role="menuitem">Support</div>
      <div role="menuitem" aria-disabled="true">API</div>
      <hr role="separator" />
      <div role="menuitem">Logout</div>
    </div>
  </Popover>
</template>

<style scoped>
div {
  opacity: 2;
}
.pop {
  min-width: 10rem;
}
</style>
