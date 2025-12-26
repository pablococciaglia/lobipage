import { Country } from './country.interface';
import {
  Admission,
  AlreadyEvaluated,
  AppointmentFor,
  ContactPreference,
  EvaluationType,
  FormOptions,
  HasDiagnose,
} from './form.interface';

export interface TherapyFormType extends PersonalData {
  admission: Admission;
  hasDiagnose: HasDiagnose;
  reason: string;
  diagnose?: string;
}

export interface EvaluationFormType extends PersonalData {
  alreadyEvaluated: AlreadyEvaluated;
  evaluationType: EvaluationType;
  orioeva: FormOptions.EVALUACION;
}

export interface OrientationFormType extends PersonalData {
  orioeva: FormOptions.ORIENTACION;
  reason: string;
}

interface PersonalData {
  age: number;
  appointmentFor: AppointmentFor;
  contactPreference: ContactPreference;
  country: Country;
  email: string;
  name: string;
  phone: string;
}
