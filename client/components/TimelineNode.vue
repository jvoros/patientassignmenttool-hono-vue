<script setup>
import { formatTime } from "./store.js";
import TimelineIcon from "./TimelineIcon.vue";
import TimelineInfo from "./TimelineInfo.vue";
import TimelineAssign from "./TimelineAssign.vue";
import { board } from "./store.js";

const { event, filter } = defineProps(["event", "filter"]);
const mode = event.assign ? event.mode : "info";
event.assign = event.assign
    ? `${board.value.shifts[event.assign].first} ${board.value.shifts[event.assign].last}`
    : undefined;
event.super = event.super
    ? `${board.value.shifts[event.super].first} ${board.value.shifts[event.super].last}`
    : undefined;

const shouldShow = () => {
    return [
        filter === "",
        filter === event.assign,
        filter === event.super,
    ].some((e) => e);
};
</script>
<template>
    <div class="tl-node" v-if="shouldShow()">
        <TimelineIcon :mode="mode" />
        <div class="tl-event">
            <TimelineAssign
                :event="event"
                v-if="event.assign !== undefined"
                :filter="filter"
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
