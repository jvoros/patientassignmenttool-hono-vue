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
import PopoverTrigger from "./PopoverTrigger.vue";
import PopoverPanel from "./PopoverPanel.vue";
import Submenu from "./Submenu.vue";
import SubmenuPanel from "./SubmenuPanel.vue";

const { shift, isPaused } = defineProps(["shift", "isPaused"]);
</script>

<template>
    <Popover align="end" :menu="true" :resets="resets">
        <PopoverTrigger>
            <button data-tooltip="Shift menu"><Menu size="14" /></button>
        </PopoverTrigger>
        <PopoverPanel align="end">
            <div role="menu" class="shiftmenu">
                <div role="heading">Shift Menu</div>
                <div role="menuitem"><UserPlus />Assign Patient</div>
                <hr role="separator" />
                <div role="menuitem" v-if="!isPaused">
                    <CirclePause />Pause Shift
                </div>
                <div role="menuitem" v-if="isPaused">
                    <CirclePlay />Unpause Shift
                </div>
                <hr role="separator" />
                <Submenu>
                    <ArrowLeftRight />Move to Zone
                    <SubmenuPanel>
                        <div role="heading">Move to Zone:</div>
                        <div role="menuitem">Fast Track</div>
                        <div role="menuitem">Trauma</div>
                    </SubmenuPanel>
                </Submenu>
                <Submenu>
                    <Plus />Add to Zone
                    <SubmenuPanel>
                        <div role="heading">Add to Zone:</div>
                        <div role="menuitem">Fast Track</div>
                        <div role="menuitem">Trauma</div>
                    </SubmenuPanel>
                </Submenu>
                <div role="menuitem"><ArrowLeft />Leave this Zone</div>
                <hr role="separator" />
                <div role="menuitem"><CircleX />Delete Shift</div>
                <div role="menuitem"><Smile />Sign Out</div>
            </div>
        </PopoverPanel>
    </Popover>
</template>

<style scoped>
.shiftmenu {
    min-width: 10rem;
}

[role="menuitem"] {
    position: relative;
}
</style>
