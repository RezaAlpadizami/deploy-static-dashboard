<script setup>
import CarouselCard from '../../components/CarouselCard.vue';

const sliderApplication = [
  {
    id: 1,
    icons: "workflow.png",
    name: "Digital Workflow",
    desc: "Recruitment Application",
  },
  {
    id: 2,
    icons: "handshake.png",
    name: "QFS Dashboard",
    desc: "Marketing Collateral",
  },
  {
    id: 3,
    icons: "label.png",
    name: "Digital Workflow",
    desc: "Marketing Application",
  },
  {
    id: 4,
    icons: "ideas.png",
    name: "Aplikasi Test AI",
    desc: "Application AI",
  },
  {
    id: 5,
    icons: "workflow.png",
    name: "Digital Workflow",
    desc: "Workplace",
  },
  {
    id: 6,
    icons: "workflow.png",
    name: "Digital Workflow",
    desc: "Workplace",
  },
  {
    id: 7,
    icons: "workflow.png",
    name: "Digital Workflow",
    desc: "Workplace",
  },
];
</script>

<template>
  <div class="bg-blue-800" id="application-section">
    <div class="py-12 max-w-7xl mx-auto px-[5.2%]">
      <div class="flex justify-between px-3 mb-4 text-gray-400">
        <p>MOST USE APPLICATION</p>
        <!-- <p class="mr-4 cursor-pointer">VIEW MORE</p> -->
      </div>
      <div class="mr-4">
        <CarouselCard :slider="sliderApplication" />
      </div>
    </div>
  </div>
</template>
