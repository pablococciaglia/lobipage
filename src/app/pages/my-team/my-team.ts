import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';
import { coworkers } from './workers';
@Component({
  selector: 'app-my-team',
  imports: [Title, PageLayout],
  templateUrl: './my-team.html',
})
export class MyTeam implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Conoce al equipo de profesionales especializados en terapias integrales, acompañamiento psicológico y orientación para TEA, TDAH y AACC. Expertos comprometidos con un enfoque personalizado.',
    });
  }
  cowerkers = coworkers;
}
