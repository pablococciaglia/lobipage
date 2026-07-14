import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-tcc',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />

      <p class="indent-3 mb-2">
        Desde una perspectiva neuroafirmativa, ofrecemos intervenciones basadas en evidencia que
        respetan la identidad neurodivergente y priorizan estrategias concretas de bienestar y
        calidad de vida.
      </p>
      <p class="indent-3 mb-2">
        Nuestro abordaje integra principalmente Terapia Cognitivo-Conductual (TCC) y Terapia de
        Aceptación y Compromiso (ACT), incorporando Exposición con Prevención de Respuesta (EPR) en
        el tratamiento del TOC.
      </p>
    </section>
  `,
})
export class Tcc {
  title = servicesTexts.find((service) => service.screen === Description.tcc)?.title || '';
}
