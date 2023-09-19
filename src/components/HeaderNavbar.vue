<script setup></script>

<template>
  <nav class="border-gray-200 dark:bg-gray-900 bg-blue-700">
    <div
      class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto px-8 py-2"
    >
      <RouterLink to="/" class="flex items-center">
        <span
          class="self-center text-xs font-semibold whitespace-nowrap text-gray-300 dark:text-white"
          >Wednesday, 31 Aug 2023 &#8226; Aqua Office</span
        >
      </RouterLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
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
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="text-xs flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink
              to="/about-us"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:text-blue-500"
              aria-current="page"
              >About us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/produk-kita"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:text-blue-500"
              aria-current="page"
              >Produk Kita</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/our-team"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:text-blue-500"
              aria-current="page"
              >Our Team</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/new-joiners"
              class="block py-2 pl-3 pr-4 text-gray-300 rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:text-blue-500"
              aria-current="page"
              >New Joiners</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
