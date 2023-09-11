<script setup>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainSection from "./dashboard-components/MainSection.vue";
import ApplicationSection from "./dashboard-components/ApplicationSection.vue";
import ScheduleSection from "./dashboard-components/ScheduleSection.vue";
import Footer from "../views/dashboard-components/Footer.vue";
import { useAnnouncementStore } from "../store/AnnouncementStore";
import { useAgendaStore } from "../store/AgendaStore";
import { useShoutStore } from "../store/ShoutStore";

let announcement = useAnnouncementStore();
let agenda = useAgendaStore();
let shout = useShoutStore()

announcement.fill();
agenda.fill();
shout.fill()

</script>

<template>
  <HeaderNavbar />
  <MainNavbar />
  <MainSection />
  <ApplicationSection />
  <ScheduleSection />
  <Footer />
</template>

<style scoped></style>
