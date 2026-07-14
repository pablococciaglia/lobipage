import { Component } from '@angular/core';
import { Title } from '../../../components/title/title';
import { Description, servicesTexts } from '../texts';

@Component({
  selector: 'description-capacitaciones',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />

      <p class="indent-3 mb-2">
        Formaciones teórico-prácticas para equipos e instituciones que desean integrar miradas
        neuroafirmativas en su trabajo.
      </p>
    </section>
  `,
})
export class Capacitaciones {
  title =
    servicesTexts.find((service) => service.screen === Description.capacitaciones)?.title || '';
}
