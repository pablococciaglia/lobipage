import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-tdah',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />
      <p class="indent-3 mb-2">
        La evaluación de TDAH consiste en un proceso clínico, conductual y neurocognitivo orientado
        a comprender el perfil de funcionamiento del/la consultante, identificar fortalezas y
        dificultades, y determinar las necesidades de apoyo e intervención.
      </p>
      <p class="indent-3 mb-2">
        Dado que el TDAH es una condición del neurodesarrollo, la valoración contempla tanto las
        manifestaciones actuales como aquellas presentes durante la infancia. Para ello, se integra
        información proveniente del/la consultante y, cuando es posible, de personas de su entorno
        cercano (familia, pareja y/o amistades).
      </p>
      <p class="indent-3 mb-2">
        La evaluación se fundamenta en los criterios diagnósticos del
        <span class="font-bold">DSM-5</span> y en los conocimientos científicos más actuales sobre
        el TDAH.
      </p>

      <div class="font-bold mb-2">¿Cómo es el proceso?</div>
      <div class="font-bold mb-2">
        Duración aproximada: 4 sesiones de evaluación + 1 sesión de devolución
      </div>
      <div class="mb-1 font-bold">🌈 Sesión 1: Entrevista clínica inicial</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Motivo de consulta.</li>
        <li class="mb-1">Historia personal, académica y laboral.</li>
        <li class="mb-2">
          Reconstrucción de manifestaciones compatibles con TDAH durante la infancia.
        </li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 2: Entrevista diagnóstica estructurada (DIVA-5)</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">
          Evaluación de síntomas de inatención, hiperactividad e impulsividad en la infancia y la
          adultez.
        </li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesiones 3 y 4: Evaluación neurocognitiva</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Capacidad intelectual (CI).</li>
        <li class="mb-1">Atención y velocidad de procesamiento.</li>
        <li class="mb-2">
          Funcionesejecutivas (planificación, organización, memoria de trabajo, control inhibitorio
          y flexibilidad cognitiva).
        </li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 5: Devolución y entrega de informe</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Integración de resultados.</li>
        <li class="mb-1">Conclusiones diagnósticas.</li>
        <li class="mb-1">Recomendaciones e indicaciones personalizadas.</li>
        <li class="mb-2">Entrega de informe completo en formato PDF.</li>
      </ul>

      <img
        class="w-full self-center lg:w-3/4  xl:w-1/2 h-auto mt-4 rounded-lg"
        src="https://res.cloudinary.com/ddbrs5z8v/image/upload/v1784065279/tdah_l5yrgu.jpg"
        alt="representacion visual de la evaluación de TDAH"
      />
    </section>
  `,
})
export class Tdah {
  title = servicesTexts.find((service) => service.screen === Description.tdah)?.title || '';
}
