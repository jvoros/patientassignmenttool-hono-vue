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

export const user = ref(null);
export const setUser = (newUser) => {
  user.value = newUser;
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

export async function post(url, payload = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    if (!response.ok) {
      catchError(new Error(json.message));
    }
    return json;
  } catch (error) {
    catchError(error);
  }
}
