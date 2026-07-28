import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '../../components/title/title';

@Component({
  selector: 'app-faq',
  imports: [Title],
  templateUrl: './faq.html',
})
export class Faq implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Encuentra respuestas claras sobre nuestros servicios, procesos de atención, terapias para TEA, TDAH y AACC, y cómo podemos acompañarte de forma profesional y personalizada.',
    });
  }
}
