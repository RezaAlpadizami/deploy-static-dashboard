<script setup>
const { listData, type } = defineProps(["listData", "type"]);
</script>

<template>
  <div
    class="flex gap-6 justify-between px-3 py-2 w-full"
    v-for="data in listData"
  >
    <div class="grid grid-cols-3">
      <div class="flex flex-col justify- align-top">
        <div
          class="bg-blue-300 grid place-items-center w-8 h-8 font-semibold"
          v-if="type === 'agenda'"
        >
          <p class="text-white text-xs">AUG</p>
          <p class="text-white text-xs -mt-2">20</p>
        </div>
        <img
          v-else
          :src="`/images/${data.imgProfile}`"
          alt="img-profile"
          :class="
            type === 'annount'
              ? 'w-8 rounded-full'
              : type === 'shoutout'
              ? 'w-8 rounded-full'
              : 'w-8'
          "
        />
      </div>
      <div v-if="type === 'agenda'" class="flex flex-col col-span-2 -ml-16">
        <div>
          <h3 class="text-[14px]: text-blue-800 font-bold">
            {{ data.title }}
          </h3>
          <p class="text-[10px] text-gray-500 min-w-[270px]">
            {{ data.date }}
          </p>
        </div>
      </div>
      <div v-if="type === 'annount'" class="flex flex-col col-span-2 -ml-16">
        <div class="flex justify-between">
          <p class="xl:text-[10px] lg:text-[8px] min-[320px]:text-[8px]">
            {{ data.name }}
          </p>
          <p class="xl:text-[8px] lg:text-[6px] min-[320px]:text-[6px]">
            {{ data.date }}
          </p>
        </div>
        <div>
          <h3
            class="text-[14px] xl:text-[14px] lg:text-[14px] min-[320px]:text-[14px] text-blue-800 font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
          >
            {{ data.titleAnnouncement }}
          </h3>
          <p
            class="text-[10px] xl:text-[10px] min-[320px]:text-[10px] lg:text-[8px] text-gray-500 min-w-[270px]"
          >
            {{ data.message }}
          </p>
        </div>
      </div>
      <div v-if="type === 'shout'" class="flex flex-col col-span-2 -ml-16">
        <div>
          <h3 class="text-[14px] text-blue-800 font-bold">
            {{ data.titleAnnouncement }}
          </h3>
          <p class="text-[10px] text-gray-500 min-w-[270px]">
            Shout out by {{ data.name }}
          </p>
        </div>
      </div>
      <div class="border-[0.5px] col-span-3 mt-2 w-full"></div>
    </div>
  </div>
</template>
