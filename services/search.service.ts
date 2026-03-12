import type { DoctorResult } from "@/utils/types/search";
import { endpoints } from "@/config/endpoints"; 

const mapDoctorContract = (doctor: DoctorResult): DoctorResult => {
  return {
    id: doctor.id,
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    email: doctor.email,
    phoneNumber: doctor.phoneNumber,
    specialty: doctor.specialty,
    licenseNumber: doctor.licenseNumber,
    clinicAddress: doctor.clinicAddress,
    doctorImage: "https://cdn-icons-png.flaticon.com/512/1021/1021799.png",
    specialtyId: doctor.specialtyId,
    Specialty: doctor.Specialty,
    DoctorAvailabilities: doctor.DoctorAvailabilities,
    DoctorBillings: doctor.DoctorBillings,
  };
};

export const searchDoctorsService = async (
  query: string
): Promise<DoctorResult[]> => {
  const { $useApi } = useNuxtApp();
  const response = await $useApi.get(endpoints.searchDoctors(query));
  return response.data.map(mapDoctorContract);
};