<script setup lang="ts">
import type { DoctorResult } from "@/utils/types/search";

defineProps<{
  doctors: DoctorResult[];
}>();

const emit = defineEmits<{ (e: "open-detail", doctor: DoctorResult): void }>();
</script>

<template>
  <section>
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          Resultados de Búsqueda
        </h2>
        <div class="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div
            v-for="doctor in doctors"
            :key="doctor.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <SearchCard :doctor="doctor" @open-detail="emit('open-detail', $event)" />
          </div>
        </div>
        <p v-if="doctors.length === 0" class="mt-8 text-gray-500 text-center">
          No se encontraron médicos.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
