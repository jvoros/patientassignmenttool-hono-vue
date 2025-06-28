import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  root: "./client",
  envDir: "../",
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
      "/socket.io": {
        target: "ws://localhost:3000",
      },
    },
  },
};
