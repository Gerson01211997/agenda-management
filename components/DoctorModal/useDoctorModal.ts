import { computed } from "vue";
import type { DoctorResult } from "@/utils/types/search";
import { dayNames, formatTime } from "./utils";

export const useDoctorModal = (doctor: DoctorResult) => {
  const specialtyName = computed(() => {
    return (
      doctor.specialty ||
      doctor.Specialty?.specialtyName ||
      "Sin especialidad"
    );
  });

  const scheduleText = computed(() => {
    if (!doctor?.DoctorAvailabilities?.length) return "Sin horario";

    const available = doctor.DoctorAvailabilities.filter(
      (s) => s.isAvailable
    );

    return available
      .map(
        (s) =>
          `${dayNames[s.dayOfWeek] ?? s.dayOfWeek} ${formatTime(
            s.startTime
          )} - ${formatTime(s.endTime)}`
      )
      .join(", ");
  });

  const billingText = computed(() => {
    if (!doctor?.DoctorBillings?.length) return "No disponible";
    return `$${doctor.DoctorBillings[0].totalAmount}`;
  });

  return {
    specialtyName,
    scheduleText,
    billingText,
  };
};