<script setup>
import CardInformation from "../../components/CardInformation.vue";
import ListLink from "../../components/ListLink.vue";
import AddCard from "../../components/AddCard.vue";
</script>

<template>
  <div class="bg-blue-200 pt-10" id="schedule-section">
    <div class="flex flex-wrap xl:gap-12 lg:gap-8 md:gap-6 sm:gap-4 min-[320px]:gap-4 lg:mx-3 justify-center align-middle">
      <CardInformation type="agenda">
        <template #header-card>
          <div
            class="flex gap-6 justify-between px-3 py-2 bg-gray-200 w-[340px]"
          >
            <div class="flex gap-4">
              <div class="flex flex-col justify-center align-middle">
                <font-awesome-icon
                  :icon="['fa', 'calendar']"
                  class="text-blue-500 w-3.5 h-3.5 rounded-full p-2 bg-gray-300"
                />
              </div>
              <div>
                <h2 class="font-semibold font mt-1 text-gray-700">Agenda</h2>
              </div>
            </div>
            <!-- <div class="flex flex-col justify-center align-middle cursor-pointer">
              <div class="flex gap-2">
                <p class="text-[10px] mt-1 font-semibold text-blue-700">
                  Add New
                </p>

                <font-awesome-icon
                  :icon="['fa', 'plus-circle']"
                  class="text-blue-500 rounded-full p-1"
                />
              </div>
            </div> -->
            <AddCard type="agenda"/>
          </div>
        </template>
        <template #button-card>
          <div class="px-3 bg-white text-center pb-2 w-full">
            <p class="text-[14px] text-blue-800 font-semibold">View More</p>
          </div>
        </template>
      </CardInformation>
      <CardInformation type="shout">
        <template #header-card>
          <div
            class="flex gap-6 justify-between px-3 py-2 bg-gray-200 w-[340px]"
          >
            <div class="flex gap-4">
              <div class="flex flex-col justify-center align-middle">
                <font-awesome-icon
                  :icon="['fa', 'volume-low']"
                  class="text-blue-500 w-3.5 h-3.5 rounded-full p-2 bg-gray-300"
                />
              </div>
              <div>
                <h2 class="font-semibold font mt-1 text-gray-700">Shout Out</h2>
              </div>
            </div>
            <!-- <div class="flex flex-col justify-center align-middle cursor-pointer">
              <div class="flex gap-2">
                <p class="text-[10px] mt-1 font-semibold text-blue-700">
                  Post Shout out
                </p>

                <font-awesome-icon
                  :icon="['fa', 'plus-circle']"
                  class="text-blue-500 rounded-full p-1"
                />
              </div>
            </div> -->
            <AddCard type="shout"/>
          </div>
        </template>
      </CardInformation>
      <div class="bg-blue-500 min-h-[405px] max-w-[340px] relative">
        <div
          class="flex flex-col p-4 text-right justify-end items-end gap-3 text-white"
        >
          <p class="text-xl font-bold">Suaramu Berharga</p>
          <div class="flex justify-end">
            <span class="border-[1px] w-12"></span>
          </div>
          <p>
            Jangan ragu untuk memberikan kritik dan saran agar Danone menjadi
            lebih baik
          </p>
          <button
            type="button"
            class="border-none bg-blue-800 py-3 px-5 rounded-sm text-md"
          >
            <font-awesome-icon
              :icon="['fa', 'mail-bulk']"
              class="text-white rounded-full w-3.5 h-3.5 mr-2"
            />Berikan Masukan
          </button>
        </div>
        <div class="absolute bottom-0 left-16">
          <img
            src="../../assets/images/writingwalliluss.png"
            alt="png"
            class="w-28"
          />
        </div>
        <div class="absolute bottom-0 right-12">
          <img src="../../assets/images/plant.png" alt="png" class="w-8" />
        </div>
      </div>
    </div>
    <div class="flex gap-4 md:gap-0 justify-center align-middle">
      <img
        src="../../assets/images/discussion_illus.png"
        alt="png"
        class="w-62"
      />
      <div class="flex gap-4">
        <div class="flex flex-col text-right text-blue-900 justify-center mt-8">
          <h4 class="font-bold text-2xl xl:leading-6 md:leading-4 sm:leading-4 lg:text-xl md:text-[16px] sm:text-[14px]">Bagikan Ceritamu di Danone</h4>
          <p class="md:text-[12px] sm:text-[10px]">Dengan #BersamaDiDanone #BanggaKerjaDiDanone</p>
        </div>
        <button
          class="border-none bg-blue-500 px-8 py-2 lg:py-2 lg:px-8 md:px-4 sm:px-2 md:text-xs sm:text-xs  text-white self-center mt-9 rounded-md"
        >
          Share Cerita
        </button>
      </div>
    </div>
  </div>
  <ListLink />
</template>
