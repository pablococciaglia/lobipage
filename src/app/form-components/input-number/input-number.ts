import { Component, input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  imports: [ReactiveFormsModule],
  templateUrl: './input-number.html',
})
export class InputNumber {
  formUtils = FormUtils;
  myForm = input.required<FormGroup<any>>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input<string>('');

  preventWrongInput(event: KeyboardEvent) {
    const notAllowedKeys = ['e', 'E', '+', '-'];
    if (notAllowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
