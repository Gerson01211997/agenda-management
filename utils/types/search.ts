export interface DoctorAvailability {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface DoctorBilling {
  totalAmount: string;
}

export interface Specialty {
  specialtyName: string;
  specialtyDescription: string;
}

export interface DoctorResult {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  specialty: string;
  licenseNumber: string;
  clinicAddress: string;
  specialtyId: number | null;
  Specialty: Specialty | null;
  DoctorAvailabilities: DoctorAvailability[];
  DoctorBillings?: DoctorBilling[];
}
