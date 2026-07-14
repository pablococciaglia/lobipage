import { Component } from '@angular/core';
import { Title } from '../../../components/title/title';
import { servicesTexts, Description } from '../texts';

@Component({
  selector: 'description-aacc',
  imports: [Title],
  template: `
    <section class="flex flex-col">
      <app-title [title]="title" class="self-center mb-4" />
      <p class="indent-3 mb-2">
        La evaluación de Altas Capacidades consiste en un proceso integral orientado a identificar
        el potencial cognitivo, creativo y socioemocional del/la consultante, así como las
        características de funcionamiento asociadas a las Altas Capacidades.
      </p>
      <p class="indent-3 mb-2">
        La evaluación de Altas Capacidades consiste en un proceso integral orientado a identificar
        el Dado que el desarrollo del talento y las capacidades excepcionales se expresa de manera
        diferente a lo largo de la vida, la valoración contempla tanto aspectos actuales como
        antecedentes relevantes de la infancia y la adolescencia. Para ello, se integran datos
        provenientes del/la consultante y, cuando resulta pertinente, de personas de su entorno
        cercano.
      </p>
      <p class="indent-3 mb-2">
        La evaluación se fundamenta en los principales modelos teóricos de las Altas Capacidades y
        en los conocimientos científicos más actuales sobre el desarrollo del potencial humano.
      </p>
      <div class="font-bold mb-2">¿Cómo es el proceso?</div>
      <div class="font-bold mb-2">
        Duración aproximada: 4 sesiones de evaluación + 1 sesión de devolución
      </div>
      <div class="mb-1 font-bold">
        🌈Sesión 1: Entrevista clínica y relevamiento de antecedentes
      </div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Historia evolutiva, académica, laboral y personal.</li>
        <li class="mb-1">Identificación de indicadores tempranos de Altas Capacidades.</li>
        <li class="mb-2">Exploración de intereses, motivaciones y áreas de fortaleza.</li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 2: Evaluación cognitiva</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Evaluación del rendimiento cognitivo general.</li>
        <li class="mb-2">Análisis de habilidades cognitivas relevantes.</li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 3: Evaluación socioemocional y de cognición social</div>
      <ul class="list-disc pl-5">
        <li class="mb-2">Evaluación de cognición social.</li>
      </ul>
      <div class="mb-1 font-bold">🌈 Sesión 4: Evaluación de creatividad y perfil de potencial</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Aplicación de pruebas de creatividad.</li>
        <li class="mb-2">Integración de indicadores de potencial, talento y desempeño.</li>
      </ul>
      <div class="mb-2 font-bold">Áreas evaluadas</div>
      <ul class="list-disc pl-5">
        <li class="mb-1 font-bold">🧠 Área conductual</li>
        <li class="mb-1 font-bold">🤝 Cognición social</li>
        <li class="mb-1 font-bold">
          📊 Rendimiento cognitivo (incluyendo capacidad intelectual - CI)
        </li>
        <li class="mb-2 font-bold">💡 Creatividad</li>
      </ul>
      <div class="mb-1 font-bold">📄 Sesión 5: Devolución y entrega de informe</div>
      <ul class="list-disc pl-5">
        <li class="mb-1">Integración de los resultados obtenidos.</li>
        <li class="mb-1">Descripción del perfil cognitivo, creativo y socioemocional.</li>
        <li class="mb-2">
          Entrega de informe completo en formato PDF con conclusiones y recomendaciones
          personalizadas.
        </li>
      </ul>
      <i>
        En caso de requerirse sesiones adicionales para completar la evaluación, esto será informado
        previamente.
      </i>

      <img
        class="w-full self-center lg:w-3/4  xl:w-1/2 h-auto mt-4 rounded-lg"
        src="https://res.cloudinary.com/ddbrs5z8v/image/upload/v1784065278/aacc_iywq1u.jpg"
        alt="representacion visual de la evaluación de Altas Capacidades"
      />
    </section>
  `,
})
export class Aacc {
  title = servicesTexts.find((service) => service.screen === Description.aacc)?.title || '';
}
