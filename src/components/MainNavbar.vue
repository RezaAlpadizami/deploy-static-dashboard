<script setup>
import { ref, onMounted } from "vue";
import { useAnnouncementStore } from "../store/AnnouncementStore";
import { initFlowbite } from "flowbite";

let announcement = useAnnouncementStore();
const activeItem = ref("dashboard");
const isSearchVisible = ref(false);

console.log('length',activeItem.value.length)

const menuItems = [
  {
    id: "dashboard",
    text: "Dashboard",
    dataSection: "main-section",
  },
  {
    id: "applications",
    text: "Applications",
    dataSection: "application-section",
  },
  {
    id: "news",
    text: "News",
    dataSection: "main-section",
  },
  {
    id: "agenda",
    text: "Agenda",
    dataSection: "schedule-section",
  },
  {
    id: "shoutout",
    text: "Shout Out",
    dataSection: "schedule-section",
  },
  {
    id: "survey",
    text: "Survey",
    dataSection: "schedule-section",
  },
  {
    id: "pengumuman",
    text: "Pengumuman",
    dataSection: "main-section",
  },
  {
    id: "feedback",
    text: "Feedback",
    dataSection: "schedule-section",
  },
];

const setActiveItem = (itemId) => {
  activeItem.value = itemId;
};

const handleClickSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  initFlowbite();

  const anchorLinks = document.querySelectorAll(".scroll-to-section");
  anchorLinks.forEach((anchorLink) => {
    anchorLink.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = anchorLink.getAttribute("data-section");
      if (sectionId) {
        scrollToSection(sectionId);
      }
    });
  });
});
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-md relative z-10">
    <div class="flex justify-between mx-4">
      <RouterLink to="/" class="flex items-center">
        <img
          src="https://www.danone.com/content/dam/corp/global/danonecom/homepage/DANONE_LOGO.png"
          class="mr-3 xl:h-20 lg:h-16 h-20"
          alt="Danone Logo"
        />
      </RouterLink>
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-end">
        <div class="flex items-center lg:order-2 mr-4">
          <button
            
            type="button"
            :class="`flex mx-6 text-sm bg-gray-800 rounded-full lg:mr-0 ${isSearchVisible ? 'hidden' : ''}`"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="../assets/images/profile1.jpg"
              alt="user photo"
            />
          </button>
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3 bg-blue-400 bg-opacity-40 rounded-t-md font-semibold">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Testing User</span
              >
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >Testing@gmail.com</span
              >
            </div>
            <ul class="flex flex-col [&>*]:py-2" aria-labelledby="user-menu-button">
              <li>
                <RouterLink
                  to="/"
                  class="block px-4 text-sm text-gray-700 hover:text-blue-400"
                  >Dashboard</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="block px-4 text-sm text-gray-700 hover:text-blue-400"
                  >Settings</RouterLink
                >
              </li>
              <li class="opacity-60 rounded-b-md">
                <RouterLink
                  to="/"
                  class="block px-4 text-sm text-gray-700 hover:text-blue-400"
                  >Sign out</RouterLink
                >
              </li>
            </ul>
          </div>
          <!-- data-collapse-toggle="navbar-user" -->
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row xl:space-x-6 lg:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 [&>*]:flex [&>*]:justify-center [&>*]:items-center"
          >
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.id"
              class="xl:mt-2 lg:mt-4"
            >
              <a
                href="#"
                class="scroll-to-section relative block h-full xl:mt-6 lg:mt-3 2xl:text-[14px] xl:text-xs lg:text-xs"
                :class="{
                  'text-blue-700 px-2':
                    activeItem === menuItem.id,
                  'text-gray-900 mx-2 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700':
                    activeItem !== menuItem.id,
                }"
                aria-current="page"
                :data-section="menuItem.dataSection"
                @click="setActiveItem(menuItem.id)"
                >{{ menuItem.text }}
                <div
                  v-if="menuItem.id === 'pengumuman'"
                  class="px-[6px] py-[2px] absolute -top-4 -right-4 rounded-md bg-red-500"
                >
                  <p class="text-[10px] text-white">
                    {{ announcement.announcement.length }}
                  </p>
                </div>
              </a>
              <div v-if="activeItem === menuItem.id" :class="`${activeItem.length < 7 ? 'md:w-14 lg:w-12 xl:w-14' : 'lg:w-20 xl:w-24'} h-1 bg-blue-700 bottom-0 rounded-md absolute`">
              </div>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 mt-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
              >
                <font-awesome-icon
                  :icon="['fa', 'magnifying-glass']"
                  class="text-gray-400 w-4 h-4"
                  @click="handleClickSearch()"
                />
              </a>
              <div v-if="isSearchVisible" class="mt-2">
                <input
                  type="text"
                  class="border border-gray-200 px-2 py-1 rounded-md max-w-40 xl:w-40 lg:w-32"
                  placeholder="Search"
                />
              </div>
            </li>
            <li>
              <button
                data-popover-target="popover-bottom"
                data-popover-placement="bottom"
                type="button"
                class="text-white font-medium rounded-lg text-sm px-2 py-2 mt-2 text-center"
              >
                <font-awesome-icon
                  :icon="['far', 'bell']"
                  class="text-gray-400 w-5 h-5"
                />
              </button>
              <div
                data-popover
                id="popover-bottom"
                role="tooltip"
                class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div
                  class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                >
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
                <div class="px-3 py-2">
                  <p>You don't have any notifications at this time</p>
                </div>
                <div data-popper-arrow></div>
              </div>
              <!-- <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
              >
                <font-awesome-icon
                  :icon="['far', 'bell']"
                  class="text-gray-400 w-5 h-5"
                />
              </a> -->
            </li>
            <!-- <li v-if="isSearchVisible === false">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                <img
                  class="w-10 h-10 rounded-full"
                  src="../assets/images/profile1.jpg"
                  alt="user photo"
                />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
