import { Component, input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './input-textarea.html',
})
export class InputTextarea {
  formUtils = FormUtils;
  myForm = input.required<FormGroup<any>>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input<string>('');
}
