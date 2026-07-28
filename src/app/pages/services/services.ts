import { Component, ElementRef, signal, viewChild, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '../../components/title/title';
import { servicesTexts, Description } from './texts';
import { Integrales } from './integrales/integrales';
import { Capacitaciones } from './capacitaciones/capacitaciones';
import { Supervisiones } from './supervisiones/supervisiones';
import { Tcc } from './tcc/tcc';
import { Toc } from './toc/toc';
import { Aacc } from './aacc/aacc';
import { Tdah } from './tdah/tdah';
import { Autismo } from './autismo/autismo';

@Component({
  selector: 'app-services',
  imports: [Title, Integrales, Capacitaciones, Supervisiones, Tcc, Toc, Aacc, Tdah, Autismo],
  templateUrl: './services.html',
})
export class Services implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Descubre nuestros servicios de terapia integral, orientación psicológica y acompañamiento especializado para TEA, TDAH, AACC y otras necesidades. Atención profesional, cercana y personalizada.',
    });
  }
  private readonly scrollElement = viewChild<ElementRef<HTMLDivElement>>('scrollHere');
  changeState = (state: Description) => {
    this.state.set(state);
    setTimeout(() => {
      this.scrollElement()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 20);
  };
  servicesTexts = servicesTexts;
  description: typeof Description = Description;
  state = signal<Description | null>(null);

  colorChange(idx: number) {
    switch (idx % 3) {
      case 0:
        return 'bg-(--my-color1)/50';
      case 1:
        return 'bg-(--my-color2)/50';
      case 2:
        return 'bg-(--my-color3)/50';

      default:
        return 'bg-(--my-color1)/50';
    }
  }
}
