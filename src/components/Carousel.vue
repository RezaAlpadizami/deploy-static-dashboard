<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const { datas } = defineProps(["datas"]);
</script>

<template>
  <Carousel :autoplay="4000" :wrap-around="true">
    <Slide v-for="(data, index) in datas" :key="index">
      <div class="carousel__item">
        <img
          :src="data.url"
          alt="images"
          class="w-full xl:w-full lg:w-full md:w-full md:h-full sm:h-full min-[320px]:min-h-[250px]"
          />
          <div
            class="absolute 2xl:w-full xl:w-full lg:w-full md:w-full min-[320px]:w-full min-[320px]:bottom-0 w-full lg:-bottom-0 md:-bottom-2 sm:-bottom-1 text-left"
          >
            <div class="bg-[rgb(0,0,0,0.5)] px-8 py-8 md:py-6 sm:py-4 min-[320px]:py-4 text-white">
              <p class="text-xs leading-none mb-3">{{ data.date }}</p>
              <h1
                class="lg:text-[18px] md:text-[18px] sm:text-[15px] min-[320px]:text-[12px] font-semibold leading-3"
              >
                {{ data.title }}
              </h1>
            </div>
          </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__item {
  max-height: 406px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
  position: absolute;
  right: 8rem;
  bottom: 7rem;
}

.carousel__pagination-button::after {
  width: 20px;
  background: rgb(202, 202, 202);
  border-radius: 8px;
}

.carousel__pagination-button--active::after {
  background-color: rgb(57, 57, 128);
}

</style>
