import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-supervisiones',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />

      <p class="indent-3 mb-2">
        Acompañamiento clínico para profesionales que buscan fortalecer criterios, herramientas y
        abordajes respetuosos.
      </p>
    </section>
  `,
})
export class Supervisiones {
  title =
    servicesTexts.find((service) => service.screen === Description.supervisiones)?.title || '';
}
