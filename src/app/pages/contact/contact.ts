import { Component, signal } from '@angular/core';
import { Title } from '../../components/title/title';
import { FormTypes } from '../../interfaces/form.interface';
import { EvaluationForm } from '../../components/evaluation-form/evaluation-form';
import { TherapyForm } from '../../components/therapy-form/therapy-form';

@Component({
  selector: 'app-contact',
  imports: [Title, EvaluationForm, TherapyForm],
  templateUrl: './contact.html',
})
export class Contact {
  formtypes: typeof FormTypes = FormTypes;
  form = signal<FormTypes | null>(null);

  openEvaluationForm(formtypes: FormTypes) {
    this.form.set(formtypes);
  }
}
