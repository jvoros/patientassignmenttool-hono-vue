import { onMounted, onUnmounted, ref } from "vue";

export function usePopperReset() {
  // Put the component refs into this variable so they can be reset when the popper is reset
  const popperValues = ref({});

  const eventHandler = () => {
    popperValues.value = {};
  };

  onMounted(() => {
    document.addEventListener("basecoat:popover", eventHandler);
  });

  onUnmounted(() => {
    document.removeEventListener("basecoat:popover", eventHandler);
  });

  return popperValues;
}
