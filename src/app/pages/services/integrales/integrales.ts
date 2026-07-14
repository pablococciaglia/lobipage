import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-integrales',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />

      <p class="indent-3 mb-2">
        Se trata de nuestra evaluación central para el diagnóstico diferencial, ya que integra una
        valoración exhaustiva de múltiples condiciones, incluyendo Trastorno del Espectro Autista,
        TDAH, Altas Capacidades y rasgos de personalidad.
      </p>
    </section>
  `,
})
export class Integrales {
  title = servicesTexts.find((service) => service.screen === Description.integrales)?.title || '';
}
