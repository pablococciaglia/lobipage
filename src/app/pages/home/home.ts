import { Component, ElementRef, signal, viewChild, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FormTypes } from '../../interfaces/form.interface';
import { EvaluationForm } from '../../components/evaluation-form/evaluation-form';
import { TherapyForm } from '../../components/therapy-form/therapy-form';

@Component({
  selector: 'app-home',
  imports: [EvaluationForm, TherapyForm],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Servicios multidisciplinarios de orientación y terapia para transtorno del espectro autista (TEA), trastorno de déficit de atención e hiperactividad (TDAH) y altas capacidades (AACC), neurodivergentes, con evaluación, acompañamiento y elaboración de informes profesionales.',
    });
  }
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
