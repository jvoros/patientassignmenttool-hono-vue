<script setup>
import { Menu } from "lucide-vue-next";

const { shift, isPaused } = defineProps(["shift", "isPaused"]);
</script>

<template>
    <wa-dropdown distance="10" placement="bottom">
        <button class="unbutton" slot="trigger">
            <Menu size="14" />
        </button>
        <h4>Shift Menu</h4>
        <wa-dropdown-item>
            <wa-icon name="user-plus" slot="icon"></wa-icon>
            Assign Patient
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item v-if="!isPaused">
            <wa-icon name="circle-pause" slot="icon"></wa-icon>
            Pause Shift
        </wa-dropdown-item>
        <wa-dropdown-item v-if="isPaused">
            <wa-icon name="circle-play" slot="icon"></wa-icon>
            Unpause Shift
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item>
            <wa-icon name="arrow-right-arrow-left" slot="icon"></wa-icon>
            Move to Zone
            <wa-dropdown-item slot="submenu">Fast Track</wa-dropdown-item>
            <wa-dropdown-item slot="submenu">Trauma</wa-dropdown-item>
        </wa-dropdown-item>
        <wa-dropdown-item>
            <wa-icon name="plus" slot="icon"></wa-icon>
            Add to Zone
            <wa-dropdown-item slot="submenu">Fast Track</wa-dropdown-item>
            <wa-dropdown-item slot="submenu">Trauma</wa-dropdown-item>
        </wa-dropdown-item>
        <wa-dropdown-item>
            <wa-icon name="arrow-left" slot="icon"></wa-icon>
            Leave this Zone
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item variant="danger">
            <wa-icon name="trash" slot="icon"></wa-icon>
            Delete Shift
        </wa-dropdown-item>
        <wa-dropdown-item>
            <wa-icon name="smile" slot="icon"></wa-icon>
            Sign Out
        </wa-dropdown-item>
    </wa-dropdown>
    <!-- <Popover align="end" :menu="true">
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
    </Popover> -->
</template>

<style scoped>
.shiftmenu {
    min-width: 10rem;
}

[role="menuitem"] {
    position: relative;
}
</style>
