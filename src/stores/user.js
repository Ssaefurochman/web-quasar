import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userId: 0,
    token: null,
    profile: {},
  }),
  getters: {},
  actions: {},
});
