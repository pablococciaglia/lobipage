import { Component, signal, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '../../components/title/title';
import { FormTypes } from '../../interfaces/form.interface';
import { EvaluationForm } from '../../components/evaluation-form/evaluation-form';
import { TherapyForm } from '../../components/therapy-form/therapy-form';

@Component({
  selector: 'app-contact',
  imports: [Title, EvaluationForm, TherapyForm],
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Contacta con nuestro equipo para solicitar orientación, asesoramiento o atención profesional. Reserva una consulta y obtén información sobre terapias para TEA, TDAH, AACC y acompañamiento especializado.',
    });
  }
  formtypes: typeof FormTypes = FormTypes;
  form = signal<FormTypes | null>(null);

  openEvaluationForm(formtypes: FormTypes) {
    this.form.set(formtypes);
  }
}
