<script setup>
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import IconMode from "./IconMode.vue";
import Popover from "./Popover.vue";
import PopoverTrigger from "./PopoverTrigger.vue";
import PopoverPanel from "./PopoverPanel.vue";

const selectedMode = ref("");
const selectedRoom = ref("");
const resets = [selectedMode, selectedRoom];
const isComplete = computed(() => resets.every((el) => el.value !== ""));

const setMode = (mode) => {
    selectedMode.value = mode;
};

const modes = [
    { tool: "Walk In", slug: "walkin" },
    { tool: "Fast Track", slug: "ft" },
    { tool: "Ambo", slug: "ambo" },
    { tool: "Police", slug: "police" },
];

const rooms = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];
</script>

<template>
    <Popover align="center" :resets="resets">
        <PopoverTrigger>
            <button class="btn" popover-target="assign-popover">
                Assign <ChevronDown />
            </button>
        </PopoverTrigger>
        <PopoverPanel align="center">
            <div class="assign-popover">
                <div class="modes">
                    <button
                        v-for="mode in modes"
                        class="btn-sm-icon-outline"
                        :data-tooltip="mode.tool"
                        @click="setMode(mode.slug)"
                        :disabled="selectedMode === mode.slug"
                    >
                        <IconMode :mode="mode.slug" />
                    </button>
                </div>

                <div>
                    <select class="select" v-model="selectedRoom">
                        <option disabled value="">Room:</option>
                        <option v-for="room in rooms" :value="room">
                            {{ room }}
                        </option>
                    </select>
                </div>

                <button class="btn submit" :disabled="!isComplete">
                    Assign
                </button>
            </div>
        </PopoverPanel>
    </Popover>
</template>

<style scoped>
.assign-popover {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    overflow: visible;
}

.modes {
    display: flex;
    gap: 0.5rem;
}

select {
    width: 10rem;
}

.submit {
    width: 100%;
}
</style>
