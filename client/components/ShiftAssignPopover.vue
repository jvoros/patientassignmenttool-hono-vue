<script setup>
import { ref, computed } from "vue";
import IconMode from "./IconMode.vue";

const { id } = defineProps(["id"]);

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

const rooms = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];
</script>

<template>
    <wa-button :id="'popover__assignPatient_' + id" size="small" with-caret>
        <wa-icon name="user-plus" slot="start"></wa-icon>
        Assign
    </wa-button>
    <wa-popover
        :for="'popover__assignPatient_' + id"
        placement="bottom"
        style="--arrow-size: 0; --max-width: 15rem"
        @wa-after-hide.self="onHide"
    >
        <div>
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
                <template v-for="room in rooms">
                    <wa-option :value="room.toString()">
                        {{ room }}
                    </wa-option>
                </template>
            </wa-select>
            <wa-button size="small" style="width: 100%" :disabled="!isComplete">
                Add to Board
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
</style>
