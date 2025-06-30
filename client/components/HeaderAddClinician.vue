<script setup>
import { Dropdown, Button, Card } from "ant-design-vue";
import { Stethoscope, ChevronDown } from "lucide-vue-next";
</script>

<template>
  <Dropdown :trigger="['click']" placement="bottomRight">
    <Button type="primary" size="default">
      <span class="button-guts">
        <Stethoscope class="button-icon" />
        Add Clinician
        <ChevronDown size="14" />
      </span>
    </Button>
    <template #overlay>
      <Card> Form to add doc goes here </Card>
    </template>
  </Dropdown>
</template>

<style scoped>
.button-guts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.button-icon {
  height: 1rem;
  width: 1rem;
  line-height: 1;
}
</style>
