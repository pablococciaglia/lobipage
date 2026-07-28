import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';

@Component({
  selector: 'app-about-me',
  imports: [Title, PageLayout],
  templateUrl: './about-me.html',
})
export class AboutMe implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Conoce más sobre mi trayectoria, enfoque terapéutico y compromiso con el acompañamiento integral para personas y familias. Ayudo a personas neurodivergentes del Diagnóstico al Tratamiento. Descubre una atención cercana, profesional y personalizada.',
    });
  }
}
