import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../utils/form-utils';
import { countries, Country } from '../../interfaces/country.interface';
import { FormOptions } from '../../interfaces/form.interface';
import { InputSelect } from '../../form-components/input-select/input-select';
import { InputTextarea } from '../../form-components/input-textarea/input-textarea';
import { InputRadio } from '../../form-components/input-radio/input-radio';
import { InputNumber } from '../../form-components/input-number/input-number';
import { InputText } from '../../form-components/input-text/input-text';
import { AlertSuccess } from '../../form-components/alert-success/alert-success';

@Component({
  selector: 'evaluation-form',
  imports: [
    ReactiveFormsModule,
    InputText,
    InputNumber,
    InputRadio,
    InputTextarea,
    InputSelect,
    AlertSuccess,
  ],
  templateUrl: './evaluation-form.html',
})
export class EvaluationForm {
  private fb = inject(FormBuilder);
  formOptions: typeof FormOptions = FormOptions;
  submited = signal(false);

  formUtils = FormUtils;
  countries = signal<Country[]>(countries);
  myForm: FormGroup = this.fb.group({
    age: [
      null,
      [
        Validators.required,
        Validators.min(0),
        Validators.max(120),
        Validators.pattern(this.formUtils.onlyNumbersPattern),
      ],
    ],
    alreadyEvaluated: [null],
    appointmentFor: [null, [Validators.required]],
    contactPreference: [null, [Validators.required]],
    country: ['', [Validators.required]],
    email: [null, [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
    evaluationType: [null],
    name: [null, [Validators.required]],
    orioeva: [null, [Validators.required]],
    phone: [null, [Validators.required, Validators.minLength(7)]],
    reason: [null],
  });

  setValidators() {
    if (this.myForm.value.orioeva === this.formOptions.ORIENTACION) {
      this.myForm.controls['reason'].setValidators([
        Validators.required,
        Validators.maxLength(200),
      ]);
      this.myForm.controls['evaluationType'].clearValidators();
      this.myForm.controls['alreadyEvaluated'].clearValidators();
      this.myForm.controls['evaluationType'].setValue(null);
      this.myForm.controls['alreadyEvaluated'].setValue(null);
    } else {
      this.myForm.controls['reason'].clearValidators();
      this.myForm.controls['evaluationType'].setValidators([Validators.required]);
      this.myForm.controls['alreadyEvaluated'].setValidators([Validators.required]);
      this.myForm.controls['reason'].setValue(null);
    }
    this.myForm.controls['reason'].updateValueAndValidity();
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
