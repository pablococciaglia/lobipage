import { Component, ElementRef, signal, viewChild } from '@angular/core';
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
  private readonly scrollElement = viewChild<ElementRef<HTMLDivElement>>('scrollHere');
  openEvaluationForm(formtypes: FormTypes) {
    this.form.set(formtypes);
    setTimeout(() => {
      this.scrollElement()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 20);
  }
}
