import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';

@Component({
  selector: 'app-blog',
  imports: [Title, PageLayout],
  templateUrl: './blog.html',
})
export class Blog {}
