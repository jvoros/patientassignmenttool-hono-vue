<script setup>
import { ref, computed, useTemplateRef } from "vue";
import { site, dispatch } from "./store.js";
import IconMode from "./IconMode.vue";

const { id, zoneSlug } = defineProps(["id", "zoneSlug"]);

const assignShiftPopover = useTemplateRef("assignShiftPopover");
const selectedMode = ref("");
const selectedRoom = ref("");
const resets = [selectedMode, selectedRoom];
const isComplete = computed(() => resets.every((el) => el.value !== ""));
const onHide = () => {
    resets.forEach((r) => {
        r.value = "";
    });
};

const setMode = (mode) => {
    selectedMode.value = mode;
};

const modes = [
    { tool: "Walk In", slug: "walkin", icon: "user-plus" },
    { tool: "Fast Track", slug: "ft", icon: "bolt" },
    { tool: "Ambo", slug: "ambo", icon: "truck-medical" },
    { tool: "Police", slug: "police", icon: "shield-halved" },
];

const assign = () => {
    dispatch("assignToShift", {
        shiftId: id,
        zoneSlug,
        mode: selectedMode.value,
        room: selectedRoom.value,
    });
    assignShiftPopover.value.hide();
};
</script>

<template>
    <wa-tooltip :for="'popover__assignShift_' + id + zoneSlug"
        >Assign Off Rotation</wa-tooltip
    >
    <wa-icon
        name="user-plus"
        slot="icon"
        :id="'popover__assignShift_' + id + zoneSlug"
    ></wa-icon>

    <wa-popover
        :for="'popover__assignShift_' + id + zoneSlug"
        ref="assignShiftPopover"
        placement="bottom"
        style="--arrow-size: 0; --max-width: 15rem"
        @wa-after-hide.self="onHide"
    >
        <div>
            <h3>Assign Off Rotation</h3>
            <wa-button-group size="small">
                <wa-button
                    v-for="mode in modes"
                    :appearance="
                        mode.slug === selectedMode ? 'outline' : 'filled'
                    "
                    @click="setMode(mode.slug)"
                >
                    <IconMode :mode="mode.slug" />
                </wa-button>
            </wa-button-group>
            <wa-select placeholder="Room" v-model="selectedRoom">
                <template v-for="room in site?.rooms">
                    <wa-option :value="room.toString()">
                        {{ room }}
                    </wa-option>
                </template>
            </wa-select>
            <wa-button
                size="small"
                style="width: 100%"
                :disabled="!isComplete"
                @click="assign()"
            >
                Assign
            </wa-button>
        </div>
    </wa-popover>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

h3 {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0;
}
</style>
