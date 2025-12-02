import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { PageLayout } from '../../components/page-layout/page-layout';

@Component({
  selector: 'app-my-team',
  imports: [Title, PageLayout],
  templateUrl: './my-team.html',
})
export class MyTeam {}
