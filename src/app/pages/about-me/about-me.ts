import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';

@Component({
  selector: 'app-about-me',
  imports: [Title, PageLayout],
  templateUrl: './about-me.html',
})
export class AboutMe {}
