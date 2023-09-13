import { defineStore } from "pinia";

export let useAnnouncementStore = defineStore("announcement", {
  state: () => ({
    total: 0,
    announcement: [],
  }),

  actions: {
    async fill() {
      try {
        let res = await import("@/data/announcement.json");
        this.$state = res.default;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
