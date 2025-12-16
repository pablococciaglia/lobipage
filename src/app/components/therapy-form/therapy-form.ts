import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../utils/form-utils';
import { countries, Country } from '../../interfaces/country.interface';
import { InputText } from '../../form-components/input-text/input-text';
import { InputNumber } from '../../form-components/input-number/input-number';
import { InputRadio } from '../../form-components/input-radio/input-radio';
import { InputTextarea } from '../../form-components/input-textarea/input-textarea';
import { InputSelect } from '../../form-components/input-select/input-select';
import { HasDiagnoseOptions } from '../../interfaces/form.interface';
import { AlertSuccess } from '../../form-components/alert-success/alert-success';

@Component({
  selector: 'therapy-form',
  imports: [
    ReactiveFormsModule,
    InputText,
    InputNumber,
    InputRadio,
    InputTextarea,
    InputSelect,
    AlertSuccess,
  ],
  templateUrl: './therapy-form.html',
})
export class TherapyForm {
  private fb = inject(FormBuilder);
  submited = signal(false);
  formUtils = FormUtils;
  hasDiagnose: typeof HasDiagnoseOptions = HasDiagnoseOptions;
  countries = signal<Country[]>(countries);
  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
    country: ['', [Validators.required]],
    diagnose: [null, [Validators.required]],
    phone: [null, [Validators.required, Validators.minLength(7)]],
    reason: [null, [Validators.required, Validators.maxLength(200)]],
    admission: [null, [Validators.required]],
    hasDiagnose: [null, [Validators.required]],
    appointmentFor: [null, [Validators.required]],
    age: [
      null,
      [
        Validators.required,
        Validators.min(0),
        Validators.max(120),
        Validators.pattern(this.formUtils.onlyNumbersPattern),
      ],
    ],
    contactPreference: [null, [Validators.required]],
  });

  setValidators() {
    if (this.myForm.value.hasDiagnose === this.hasDiagnose.HAS_DIAGNOSE) {
      this.myForm.controls['diagnose'].setValidators([Validators.required]);
      this.myForm.controls['diagnose'].setValue(null);
      this.myForm.controls['diagnose'].markAsUntouched();
    } else {
      this.myForm.controls['diagnose'].clearValidators();
      this.myForm.controls['diagnose'].setValue(null);
      this.myForm.controls['diagnose'].markAsUntouched();
    }
    this.myForm.controls['diagnose'].updateValueAndValidity();
  }

  submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.submited.set(true);
    setTimeout(() => {
      this.submited.set(false);
      this.myForm.reset();
    }, 3000);
  }
}
