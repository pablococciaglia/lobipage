import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-toc',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />
      <p class="indent-3 mb-2">
        La evaluación de TOC consiste en un proceso clínico integral orientado a comprender la
        naturaleza, intensidad y el impacto de las obsesiones y compulsiones en la vida cotidiana
        del/la consultante, así como a identificar las necesidades terapéuticas específicas de cada
        caso.
      </p>
      <p class="indent-3 mb-2">
        La valoración incluye el análisis de la frecuencia, duración e intensidad de los síntomas,
        el grado de interferencia que generan en las distintas áreas de la vida y las estrategias
        que la persona utiliza para afrontarlos.
      </p>
      <p class="indent-3 mb-2">
        Asimismo, dado que el TOC suele presentarse junto a otras condiciones psicológicas, la
        evaluación contempla la exploración de posibles dificultades concurrentes, como ansiedad,
        depresión y otros síntomas emocionales relevantes.
      </p>
      <p class="indent-3 mb-2">
        La evaluación se fundamenta en los criterios diagnósticos del
        <span class="font-bold">DSM-5</span> y en los conocimientos científicos más actuales sobre
        el Trastorno Obsesivo-Compulsivo.
      </p>
      <div class="mb-2 font-bold">¿Cómo es el proceso?</div>
      <div class="mb-2 font-bold">
        Duración aproximada: 3 sesiones de evaluación + 1 sesión de devolución
      </div>
      <div class="mb-1 font-bold">🌈 Sesión 1: Entrevista clínica inicial</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Motivo de consulta.</li>
        <li class="mb-1">Historia de los síntomas.</li>
        <li class="mb-1">Identificación de obsesiones, compulsiones y conductas de evitación.</li>
        <li class="mb-2">Evaluación del impacto funcional en la vida cotidiana.</li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 2: Evaluación específica de TOC</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Aplicación de instrumentos clínicos especializados.</li>
        <li class="mb-2">Análisis de la duración, frecuencia e intensidad de los síntomas.</li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 3: Evaluación de condiciones concurrentes</div>
      <ul class="list-disc pl-5">
        <li class="mb-2">
          Exploración de síntomas de ansiedad, depresión y otras dificultades emocionales
          relevantes.
        </li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 4: Devolución y entrega de informe</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Integración de resultados.</li>
        <li class="mb-1">Valoración diagnóstica.</li>
        <li class="mb-1">Identificación de áreas prioritarias de intervención.</li>
        <li class="mb-2">Entrega de informe completo en formato PDF.</li>
      </ul>

      <img
        class="w-full self-center lg:w-3/4  xl:w-1/2 h-auto mt-4 rounded-lg"
        src="https://res.cloudinary.com/ddbrs5z8v/image/upload/v1784065278/toc_twubiy.jpg"
        alt="representacion visual de la evaluación de TOC"
      />
    </section>
  `,
})
export class Toc {
  title = servicesTexts.find((service) => service.screen === Description.toc)?.title || '';
}
