<script setup>
import { ref } from "vue";
import {
  Menu,
  CircleX,
  Smile,
  UserPlus,
  CirclePause,
  CirclePlay,
  ArrowLeftRight,
  ArrowLeft,
  Plus,
} from "lucide-vue-next";
import Popover from "./Popover.vue";

const addZoneOpen = ref("");
const moveZoneOpen = ref("");
const resets = [addZoneOpen, moveZoneOpen];
</script>

<template>
  <Popover align="end" :menu="true" :resets="resets">
    <template #trigger>
      <button data-tooltip="Shift menu"><Menu size="14" /></button>
    </template>
    <div role="menu" class="shiftmenu">
      <div role="heading">Shift Menu</div>
      <div role="menuitem"><UserPlus />Assign Patient</div>
      <hr role="separator" />
      <div role="menuitem"><CirclePause />Pause Shift</div>
      <div role="menuitem"><CirclePlay />Unpause Shift</div>
      <hr role="separator" />
      <div role="menuitem" @mouseover="moveZoneOpen = true" @mouseleave="moveZoneOpen = false">
        <ArrowLeftRight />Move to Zone
        <div class="submenu" role="menu" data-popover :class="{ open: moveZoneOpen }">
          <div role="heading">Move to Zone:</div>
          <div role="menuitem">Fast Track</div>
          <div role="menuitem">Trauma</div>
        </div>
      </div>
      <div role="menuitem" @mouseover="addZoneOpen = true" @mouseleave="addZoneOpen = false">
        <Plus />Add to Zone
        <div class="submenu" role="menu" data-popover :class="{ open: addZoneOpen }">
          <div role="heading">Add to Zone:</div>
          <div role="menuitem">Fast Track</div>
          <div role="menuitem">Trauma</div>
        </div>
      </div>
      <div role="menuitem"><ArrowLeft />Leave this Zone</div>
      <hr role="separator" />
      <div role="menuitem"><CircleX />Delete Shift</div>
      <div role="menuitem"><Smile />Sign Out</div>
    </div>
  </Popover>
</template>

<style scoped>
.shiftmenu {
  min-width: 10rem;
}

[role="menuitem"] {
  position: relative;
}

.submenu {
  position: absolute;
  left: 100%;
  top: -1rem;
  transform: translateX(-1rem);
  opacity: 0;
  visibility: hidden;
}

.submenu.open {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.3s ease;
  visibility: visible;
}
</style>
