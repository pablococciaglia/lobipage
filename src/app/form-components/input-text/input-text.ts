import { Component, input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [ReactiveFormsModule],
  templateUrl: './input-text.html',
})
export class InputText {
  formUtils = FormUtils;
  myForm = input.required<FormGroup<any>>();
  name = input.required<string>();
  label = input.required<string>();
  autocomplete = input.required<string>();
  placeholder = input<string>('');
  type = input<string>('text');
}
