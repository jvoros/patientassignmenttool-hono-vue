<script setup>
import { ref, computed } from "vue";
const selectedClinician = ref("");
const selectedShift = ref("");
const resets = [selectedClinician, selectedShift];
const isComplete = computed(() => resets.every((el) => el.value !== ""));
const onHide = () => {
    resets.forEach((r) => {
        r.value = "";
    });
};
</script>

<template>
    <wa-button id="popover__addClinician" size="small" with-caret>
        <wa-icon name="stethoscope" slot="start"></wa-icon>
        Add Clinician
    </wa-button>
    <wa-popover
        for="popover__addClinician"
        placement="bottom"
        style="--arrow-size: 0"
        @wa-after-hide.self="onHide"
    >
        <div>
            <wa-select placeholder="Clinician" v-model="selectedClinician">
                <wa-option value="Jeremy Voros">Jeremy Voros</wa-option>
            </wa-select>
            <wa-select placeholder="Shift" v-model="selectedShift">
                <wa-option value="6a-3p">6 am - 3 pm</wa-option>
            </wa-select>
            <wa-button size="small" style="width: 100%" :disabled="!isComplete"
                >Add to Board</wa-button
            >
        </div>
    </wa-popover>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
