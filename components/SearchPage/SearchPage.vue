<script setup lang="ts">
import { useSearchPage } from "./useSearchPage";
import { className } from "./styles";

const {
  displayedDoctors,
  isLoading,
  selectedDoctor,
  showModal,
  onSearch,
  openDetail,
  closeModal,
} = useSearchPage();
</script>

<template>
  <div :class="className.container">
    <LandingHeader />

    <SearchInput
      @search="onSearch"
      :doctorsCount="displayedDoctors.length"
    />

    <div
      v-if="isLoading"
      :class="className.loaderWrapper"
    >
      <div :class="className.loader" />
    </div>

    <SearchResult
      v-else
      :doctors="displayedDoctors"
      @open-detail="openDetail"
    />

    <DoctorModal
      :doctor="selectedDoctor"
      :show="showModal"
      @close="closeModal"
    />
  </div>
</template>