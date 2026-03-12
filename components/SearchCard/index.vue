<script setup lang="ts">
import type { DoctorResult } from "@/utils/types/search";

const props = defineProps<{
  doctor: DoctorResult;
}>();

const emit = defineEmits<{ (e: "open-detail", doctor: DoctorResult): void }>();
</script>

<template>
  <div>
    <img
      :src="doctor.doctorImage"
      :alt="`Dr. ${doctor.firstName} ${doctor.lastName}`"
      class="w-full h-48 object-contain bg-gray-50 p-4"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">
        Dr. {{ doctor.firstName }} {{ doctor.lastName }}
      </h3>
      <p class="mt-2 text-gray-600">
        {{ doctor.specialty || doctor.Specialty?.specialtyName || "Sin especialidad" }}
      </p>
      <a
        href="#"
        class="block mt-4 text-indigo-500 hover:underline"
        @click.prevent="emit('open-detail', doctor)"
      >
        Ver más detalles
      </a>
    </div>
  </div>
</template>

<style scoped></style>
