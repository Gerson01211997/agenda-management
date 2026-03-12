import { defineStore } from "pinia";
import { type DoctorResult } from "@/utils/types/search";

export const useDoctorsStore = defineStore("doctors", {
  state: () => ({ doctors: [] as DoctorResult[], loading: false }),
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
  },
  actions: {
    async fetcAllhDoctors() {
      const { $useApi } = useNuxtApp();
      this.loading = true;
      return $useApi
        .get(`/doctors`)
        .then((response) => {
          this.doctors = response.data;
          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
