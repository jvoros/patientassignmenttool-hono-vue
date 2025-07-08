<script setup>
import { formatTime } from "./store.js";
import TimelineReassignPopover from "./TimelineReassignPopover.vue";
const { event } = defineProps(["event"]);
</script>

<template>
    <div class="assign">
        <div>
            <div class="time">{{ formatTime(event.time) }}</div>
            <TimelineReassignPopover
                :name="event.assign"
                heading="Reassign to"
                which="provider"
                align="start"
            />
            <div class="message" v-if="event.super">
                Supervisor: {{ event.super }}
            </div>
            <div class="message" v-if="event.message">{{ event.message }}</div>
            <div class="message" v-if="event.note">{{ event.note }}</div>
        </div>

        <TimelineReassignPopover
            :name="event.room"
            heading="New Room"
            which="room"
            align="center"
        />
    </div>
</template>

<style scoped>
.assign {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg-highlight);
    padding: var(--padding-half);
}

.assign:hover .reassign-chevron {
    visibility: visible;
}

.time,
.message {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
}
</style>
