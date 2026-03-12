<script setup lang="ts">
import type { DoctorResult } from "@/utils/types/search";
import { useDoctorModal } from "./useDoctorModal";
import { className } from "./stylesModalInfo";

const props = defineProps<{
  doctor: DoctorResult;
}>();

const emit = defineEmits<{ (e: "close"): void }>();

const { specialtyName, scheduleText, billingText } =
  useDoctorModal(props.doctor);
</script>

<template>
  <div :class="className.container">
    <button
      @click="emit('close')"
      :class="className.closeButton"
      aria-label="Cerrar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div :class="className.imageWrapper">
      <img
        :src="doctor.doctorImage"
        alt="Doctor"
        :class="className.image"
      />
    </div>

    <div :class="className.infoWrapper">
      <h2 :class="className.title">
        Dr. {{ doctor.firstName }} {{ doctor.lastName }}
      </h2>

      <p :class="className.text">{{ specialtyName }}</p>

      <p :class="className.text">
        {{ doctor.clinicAddress || "Dirección no disponible" }}
      </p>

      <p :class="className.text">
        Teléfono: {{ doctor.phoneNumber || "No disponible" }}
      </p>

      <p :class="className.text">
        Costo de la cita: {{ billingText }}
      </p>

      <p :class="className.text">
        Horario: {{ scheduleText }}
      </p>
    </div>
  </div>
</template>