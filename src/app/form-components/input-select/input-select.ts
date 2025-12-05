import { Component, input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-input-select',
  imports: [ReactiveFormsModule],
  templateUrl: './input-select.html',
})
export class InputSelect {
  formUtils = FormUtils;
  myForm = input.required<FormGroup<any>>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input<string>('');
  type = input<string>('text');
  defaultOption = input.required<string>();
  selectOptions = input.required<Country[]>();
}
