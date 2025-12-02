import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { AboutMe } from './pages/about-me/about-me';
import { Services } from './pages/services/services';
import { Faq } from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { MyTeam } from './pages/my-team/my-team';
import { RoutesPaths } from './interfaces/routes.interfaces';

export const routes: Routes = [
  {
    path: RoutesPaths.HOME,
    component: Home,
  },
  {
    path: RoutesPaths.BLOG,
    component: Blog,
  },
  {
    path: RoutesPaths.ABOUT_ME,
    component: AboutMe,
  },
  {
    path: RoutesPaths.MY_TEAM,
    component: MyTeam,
  },
  {
    path: RoutesPaths.SERVICES,
    component: Services,
  },
  {
    path: RoutesPaths.FAQ,
    component: Faq,
  },
  {
    path: RoutesPaths.CONTACT,
    component: Contact,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
