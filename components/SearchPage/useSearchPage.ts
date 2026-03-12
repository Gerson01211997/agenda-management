import { ref, computed, onMounted } from "vue";
import { useSearchStore } from "@/store/search";
import { useDoctorsStore } from "@/store/doctors";
import type { DoctorResult } from "@/utils/types/search";

export const useSearchPage = () => {
  const searchStore = useSearchStore();
  const doctorsStore = useDoctorsStore();

  const selectedDoctor = ref<DoctorResult | null>(null);
  const showModal = ref(false);
  const hasSearched = ref(false);

  onMounted(() => {
    doctorsStore.fetcAllhDoctors();
  });

  const displayedDoctors = computed<DoctorResult[]>(() => {
    if (hasSearched.value) return searchStore.results;
    return doctorsStore.doctors;
  });

  const isLoading = computed(() => {
    return searchStore.loading || doctorsStore.loading;
  });

  const onSearch = async (form: { searchQuery: string }) => {
    if (!form.searchQuery.trim()) {
      hasSearched.value = false;
      return;
    }

    hasSearched.value = true;
    await searchStore.searchDoctors(form.searchQuery);
  };

  const openDetail = (doctor: DoctorResult) => {
    selectedDoctor.value = doctor;
    showModal.value = true;
  };

  const closeModal = () => {
    showModal.value = false;
    selectedDoctor.value = null;
  };

  return {
    displayedDoctors,
    isLoading,
    selectedDoctor,
    showModal,
    onSearch,
    openDetail,
    closeModal,
  };
};