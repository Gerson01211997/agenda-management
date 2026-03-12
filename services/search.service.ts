import type { DoctorResult } from "@/utils/types/search";
import { endpoints } from "@/config/endpoints"; 

export const searchDoctorsService = async (
  query: string
): Promise<DoctorResult[]> => {
  const { $useApi } = useNuxtApp();
  const response = await $useApi.get(endpoints.searchDoctors(query));
  return response.data;
};