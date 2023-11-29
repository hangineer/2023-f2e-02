<template>
  <!-- TODO:
    1. tabs hover
    2. icon
  -->

  <!-- Tabs Nav -->
  <ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref>
  <li class="mr-5" role="tabItem">
    <a
      href="#tabs-president"
      class="block mb-2 pb-3 border-black border-x-0 border-b-4 border-t-0 text-base lg:text-lg font-semibold leading-tight"
      data-te-toggle="tab"
      data-te-target="#tabs-president"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-president"
      aria-selected="true"
      >第15任 總統副總統大選</a
    >
  </li>
  <li role="tabItem">
    <a
      href="#tabs-legislator"
      class="block mb-2 pb-3 border-x-0 border-b-2 border-t-0 border-transparent text-base lg:text-lg font-normal leading-tight"
      data-te-toggle="tab"
      data-te-target="#tabs-legislator"
      role="tab"
      aria-controls="tabs-legislator"
      aria-selected="false"
      >第10任 立法委員選舉</a
    >
  </li>
</ul>

<!-- Tabs content -->
<div class="mb-6">
  <select class="form-select w-[156px] mr-5" data-te-select-init>
    <option value="null">請選擇</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <select class="form-select w-[156px] mr-5" data-te-select-init>
    <option value="null">請選擇</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <select class="form-select w-[156px] mr-5" data-te-select-init>
    <option value="null">請選擇</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <button class="bg-navy btn text-white">
    清除

    <faIcon icon="fa-solid fa-rotate-right text-white" />
    <!-- <i class="fa-solid fa-rotate-right text-white"></i> -->
  </button>
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-president"
    role="tabpanel"
    aria-labelledby="tabs-president-tab"
    data-te-tab-active
  >
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-legislator"
    role="tabpanel"
    aria-labelledby="tabs-legislator-tab">
    Tab 2 content
  </div>
</div>

</template>
<script setup>
import { Select, initTE } from "tw-elements";
initTE({ Select });
</script>
