import { ref } from "vue";
import mockBoard from "../mockBoard.js";

export const board = ref(mockBoard);

export const error = ref(null);
export const catchError = (err) => {
  console.error(err.stack);
  error.value = err.message;
  setTimeout(() => {
    error.value = null;
  }, 3000);
  return false;
};

export const formatTime = (epoch) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Denver",
    hour12: false,
  });

  return formatter.format(new Date(epoch));
};
