<script setup>
import { useAnnouncementStore } from "../../store/AnnouncementStore";
import Carousel from "../../components/Carousel.vue";
import CardInformation from "../../components/CardInformation.vue";

let announcement = useAnnouncementStore();

const images = [
  {
    id: 1,
    date: "Tue 23 Juli 2024",
    title: "Air Mineral Vit Selalu Fokus pada Kesehatan Mayarakat",
    url: "https://ik.imagekit.io/minumvit/storage/articles/College-FA.jpg?tr=w-1440",
  },
  {
    id: 2,
    date: "Fri 22 Juli  2023",
    title: "Sapi sehat makan rumput setiap hari (nada yakult)",
    url: "https://smartmedia.digital4danone.com//is/image/danonecs/cattle-eating-feed-in-barn",
  },
  {
    id: 3,
    date: "Sun 8 Ags  2023",
    title: "5 Cara Agar Tahun Baru Makin Sehat dengan Air Mineral yang Baik",
    url: "https://ik.imagekit.io/minumvit/storage/articles/Kitchen-FA.jpg?tr=w-1440",
  },
];
</script>

<template>
  <section class="bg-blue-100 py-12 scroll-smooth w-full" id="main-section">
    <div class="max-w-[1520px] mx-auto">
      <div
        class="grid h-full 2xl:grid-cols-3 lg:grid-cols-3 lg:gap-3 md:grid-cols-1 sm:grid-cols-1 min-[320px]:grid-cols-1 2xl:mx-52 xl:mx-20 lg:mx-10"
      >
        <div class="col-span-2">
          <Carousel :datas="images"> </Carousel>
        </div>
        <CardInformation type="annount">
          <template #header-card>
            <div class="flex gap-6 justify-between px-3 py-1 bg-gray-200">
              <div class="flex gap-4">
                <div class="flex flex-col justify-center align-middle">
                  <font-awesome-icon
                    :icon="['fa', 'volume-low']"
                    class="text-blue-500 w-3.5 h-3.5 rounded-full p-2 bg-gray-300"
                  />
                </div>
                <div>
                  <p class="text-[10px]">Hai, disini ada</p>
                  <h2 class="font-bold -mt-1 text-gray-700">Pengumuman</h2>
                </div>
              </div>
              <div class="flex flex-col justify-center align-middle">
                <p
                  class="px-[6px] py-[2px] rounded bg-red-500 text-white text-[8px]"
                >
                  {{ announcement.announcement.length }}
                </p>
              </div>
            </div>
          </template>
          <template #button-card>
            <div class="px-3 bg-white w-full text-center pb-2 cursor-pointer" v-if="announcement.announcement.length > 3">
              <p class="text-[14px] text-blue-800 font-semibold">
                Lihat Semua Pengumuman
              </p>
            </div>
          </template>
        </CardInformation>
      </div>
    </div>
  </section>
</template>
