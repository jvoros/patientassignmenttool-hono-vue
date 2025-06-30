<script setup>
import { Menu } from "lucide-vue-next";
</script>

<template>
  <div class="dropdown-menu">
    <button style="cursor: pointer"><Menu size="14" /></button>
    <div data-popover aria-hidden="true" data-align="end" class="min-w-56">
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
        <div role="menuitem">
          Logout
          <span class="text-muted-foreground ml-auto text-xs tracking-widest">⇧⌘P</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
