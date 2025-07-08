<script setup>
import TimelineIcon from "./TimelineIcon.vue";
import TimelineInfo from "./TimelineInfo.vue";
import TimelineAssign from "./TimelineAssign.vue";
import { board, formatTime } from "./store.js";

const { event, filter } = defineProps(["event", "filter"]);

const mode = event.assign ? event.mode : "info";
const getNames = () => {
    let assign = "";
    let sup = "";
    if (event.assign) {
        const shift = board.value.shifts[event.assign];
        assign = `${shift.first} ${shift.last}`;
    }
    if (event.super) {
        const shift = board.value.shifts[event.super];
        sup = `${shift.first} ${shift.last}`;
    }
    return { assign, sup };
};
const { assign, sup } = getNames();
const expandedEvent = {
    ...event,
    assign,
    super: sup,
};

const shouldShow = () => filter === "" || filter === assign || filter === sup;
</script>
<template>
    <div class="tl-node" v-if="shouldShow()">
        <TimelineIcon :mode="mode" />
        <div class="tl-event">
            <TimelineAssign
                :event="expandedEvent"
                :filter="filter"
                v-if="assign"
            />
            <TimelineInfo
                :time="formatTime(event.time)"
                :message="event.message"
                v-else
            />
        </div>
    </div>
</template>

<style scoped>
.tl-node {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 2rem;
}

.tl-node:first-of-type {
    padding-bottom: 1rem;
}

.tl-event {
    width: 100%;
}
</style>
