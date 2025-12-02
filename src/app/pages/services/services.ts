import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';

@Component({
  selector: 'app-services',
  imports: [Title, PageLayout],
  templateUrl: './services.html',
})
export class Services {}
