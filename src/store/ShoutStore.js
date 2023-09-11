import { defineStore } from "pinia";

export let useShoutStore = defineStore("shout", {
  state: () => ({
    newShout: "",
    showModalShout: false,
    shout: [],
  }),

  actions: {
    async fill() {
      let res = await import("@/data/shoutout.json");
      this.shout = res.default;
    },
  },
});
