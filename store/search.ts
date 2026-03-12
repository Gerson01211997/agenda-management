import { defineStore } from "pinia";
import type { DoctorResult } from "@/utils/types/search";
import { searchDoctorsService } from "@/services/search.service";

const searchDoctors = async (query: string) => {
  const store = useSearchStore();

  store.loading = true;
  store.error = null;

  try {
    const data: DoctorResult[] = await searchDoctorsService(query);
    store.results = data;
    return data;
  } catch (error: any) {
    store.error = error.message;
    throw error;
  } finally {
    store.loading = false;
  }
};

export const useSearchStore = defineStore("search", {
  state: () => ({
    results: [] as DoctorResult[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getResults: (state) => state.results,
  },

  actions: {
    searchDoctors,
  },
});