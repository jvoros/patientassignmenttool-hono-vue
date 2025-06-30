import { ref } from "vue";
import { message } from "ant-design-vue";
import mockBoard from "./mockBoard.js";

export const board = ref(mockBoard);

export const formatTime = (epoch) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Denver",
    hour12: false,
  });

  return formatter.format(new Date(epoch));
};

export const [messageApi, contextHolder] = message.useMessage();

export const toast = (message) => {
  messageApi.info(message);
};
