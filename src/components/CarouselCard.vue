<script setup>
import { reactive, ref, computed } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const { slider } = defineProps(["slider"]);
const carouselRef = ref(null)

const canScrollLeft = computed(() => {
  return carouselRef.value && carouselRef.value.currentIndex > 0;
});

const canScrollRight = computed(() => {
  return slider.length > settings.value.itemsToShow;
});

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = reactive({
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 5,
    snapAlign: "center"
  }
});
</script>

<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" >
    <Slide v-for="slide in slider" :key="slide.id" ref="carousel">
      <div class="carousel__item mx-2">
        <div class="bg-white p-4 rounded-lg">
          <div class="flex text-gray-500 gap-4 my-3">
            <img :src="`/images/${slide.icons}`" alt="icons" class="w-12 h-12" />
            <p class="text-left font-semibold">{{ slide.name }}</p>
          </div>
          <div class="border-[1px] -mx-4"></div>
          <div class="text-gray-500 mt-2 text-left">
            <p class="text-[14px]">{{ slide.desc }}</p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation>
        <template #next>
          <div class="carousel__next" v-if="canScrollRight">
            <font-awesome-icon
            :icon="['fa', 'chevron-right']"
            class="text-black w-3.5 h-3.5"
          />
          </div>
        </template>
        <template #prev>
          <div class="carousel__prev" v-if="canScrollLeft">
            <font-awesome-icon
            :icon="['fa', 'chevron-left']"
            class="text-black w-3.5 h-3.5"
          />
          </div>
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  height: 10rem;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__next {
  right: -50px;
  background: white;
  border-radius: 100%;
}
.carousel__prev {
  left: -70px;
  background: white;
  border-radius: 100%;
}
</style>
