import { Component } from '@angular/core';
import { Description, servicesTexts } from '../texts';
import { Title } from '../../../components/title/title';

@Component({
  selector: 'description-autismo',
  imports: [Title],
  template: ` <section class="flex flex-col">
    <app-title [title]="title" class="self-center mb-4" />

    <p class="indent-3 mb-2">
      La evaluación de autismo consiste en un proceso clínico integral orientado a comprender el
      perfil de funcionamiento del/la consultante, identificar sus fortalezas, desafíos y
      necesidades de apoyo, y determinar la presencia de características compatibles con el
      Trastorno del Espectro Autista (TEA).
    </p>
    <p class="indent-3 mb-2">
      Dado que se trata de una condición del neurodesarrollo, la valoración contempla tanto las
      manifestaciones actuales como aquellas presentes a lo largo de la historia de vida. Para ello,
      se integra información proveniente del/la consultante y, cuando es posible, de personas de su
      entorno cercano (familia, pareja y/o amistades).
    </p>
    <p class="indent-3 mb-2">
      La evaluación se fundamenta en los criterios diagnósticos del
      <span class="font-bold">DSM-5</span> y en los conocimientos científicos más actuales sobre el
      autismo.
    </p>
    <div class="mb-2 font-bold">¿Cómo es el proceso?</div>
    <div class="mb-2 font-bold">Duración aproximada: 3 sesiones de evaluación</div>
    <div class="mb-1 font-bold">
      🌈 Sesión 1: Evaluación observacional y recopilación de antecedentes
    </div>
    <ul class="list-disc pl-5">
      <li class="mb-1">Administración del <span class="font-bold">ADOS-2</span>.</li>
      <li class="mb-1">
        Recolección de información sobre la historia evolutiva y el funcionamiento actual.
      </li>
      <li class="mb-2">
        Solicitud de cuestionarios y/o entrevistas a personas significativas del entorno (familia,
        pareja y amistades).
      </li>
    </ul>
    <div class="mb-1 font-bold">🌈 Sesión 2: Evaluación clínica complementaria</div>
    <ul class="list-disc pl-5">
      <li class="mb-1">
        Aplicación de escalas clínicas para la identificación de características del espectro
        autista.
      </li>
      <li class="mb-1">
        Evaluación de reconocimiento emocional, empatía y aspectos socioemocionales relevantes.
      </li>
    </ul>
    <div class="mb-1 font-bold">🌈 Sesión 3: Evaluación neurocognitiva</div>
    <ul class="list-disc pl-5">
      <li class="mb-2">
        Realización de una minibatería neurocognitiva para explorar procesos cognitivos asociados al
        funcionamiento cotidiano.
      </li>
    </ul>
    <div class="mb-1 font-bold">📄 Entrega de informe</div>
    <ul class="list-disc pl-5">
      <li class="mb-1">Integración de toda la información obtenida durante el proceso.</li>
      <li class="mb-1">Valoración diagnóstica.</li>
      <li class="mb-1">Identificación de fortalezas, desafíos y necesidades de apoyo.</li>
      <li class="mb-2">
        Entrega de informe completo en formato PDF con resultados y recomendaciones personalizadas
        cuando corresponda.
      </li>
    </ul>
    <img
      class="w-full self-center lg:w-3/4  xl:w-1/2 h-auto mt-4 rounded-lg"
      src="https://res.cloudinary.com/ddbrs5z8v/image/upload/v1784065279/autismo_urhxlv.jpg"
      alt="representacion visual de la evaluación de autismo"
    />
  </section>`,
})
export class Autismo {
  title = servicesTexts.find((service) => service.screen === Description.autismo)?.title || '';
}
