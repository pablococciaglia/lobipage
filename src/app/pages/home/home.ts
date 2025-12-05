import { Component, signal } from '@angular/core';
import { FormTypes } from '../../interfaces/form.interface';
import { EvaluationForm } from '../../components/evaluation-form/evaluation-form';
import { TherapyForm } from '../../components/therapy-form/therapy-form';

@Component({
  selector: 'app-home',
  imports: [EvaluationForm, TherapyForm],
  templateUrl: './home.html',
})
export class Home {
  formtypes: typeof FormTypes = FormTypes;
  form = signal<FormTypes | null>(null);

  openEvaluationForm(formtypes: FormTypes) {
    this.form.set(formtypes);
  }
}
