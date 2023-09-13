<script setup>
import ListInformation from "./ListInformation.vue";
import { useAnnouncementStore } from "../store/AnnouncementStore";
import { useAgendaStore } from "../store/AgendaStore";
import { useShoutStore } from "../store/ShoutStore";

defineProps({
  type: String,
  viewMore: Boolean
});

let announcement = useAnnouncementStore()
let agenda = useAgendaStore()
let shout = useShoutStore()
</script>

<template>
  <div
    :class="[
      'flex flex-col items-center md:mt-0 sm:mt-0',
      type === 'annount' ? 'lg:mt-0 md:mt-4 sm:mt-4 xl:mt-0 min-[320px]:mt-4' : 'lg:mt-0 xl:mt-0',
    ]"
  >
  <div class="bg-white max-w-[340px]">
      <slot name="header-card"></slot>
      <div :class="type === 'shout' ? 'max-h-[360px] w-[98%] overflow-y-auto' : viewMore && type === 'agenda' ? 'max-h-[400px] w-full overflow-y-auto hide-scrollbar overflow-x-hidden' : 'max-h-[331px] w-full overflow-y-auto hide-scrollbar overflow-x-hidden'">
          <ListInformation
            :list-data="type === 'annount' ? announcement.announcement : type === 'shout' ? shout.$state.shout : agenda.$state.agenda"
            :type='type'
          />
      </div>
      <slot name="button-card"></slot>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  width: 0rem;
}

</style>

