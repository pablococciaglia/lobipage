import { Component, input, output } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

interface InputRadioOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-input-radio',
  imports: [ReactiveFormsModule],
  templateUrl: './input-radio.html',
})
export class InputRadio {
  formUtils = FormUtils;
  question = input.required<string>();
  options = input.required<InputRadioOption[]>();
  myForm = input.required<FormGroup<any>>();
  name = input.required<string>();
  actionChange = output<void>();
}
