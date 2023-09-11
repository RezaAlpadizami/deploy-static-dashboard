import { defineStore } from "pinia";

export let useAgendaStore = defineStore("agenda", {
  state: () => ({
    newAgenda: "",
    showModalAgenda: false,
    agenda: [],
  }),

  actions: {
    async fill() {
      let res = await import("@/data/agenda.json");
      console.log("res", res);
      this.agenda = res.default;
    },
  },
});
