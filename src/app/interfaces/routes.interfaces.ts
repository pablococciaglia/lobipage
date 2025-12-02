export enum RoutesPaths {
  ABOUT_ME = 'sobre-mi',
  BLOG = 'blog',
  CONTACT = 'contacto',
  FAQ = 'preguntas-frecuentes',
  HOME = '',
  MY_TEAM = 'mi-equipo',
  SERVICES = 'servicios',
}
export enum RoutesLabels {
  ABOUT_ME = 'Sobre mí',
  BLOG = 'Blog',
  CONTACT = 'Contacto',
  FAQ = 'Preguntas Frecuentes',
  MY_TEAM = 'Mi Equipo',
  SERVICES = 'Servicios',
}

export const appRoutes = [
  {
    path: RoutesPaths.ABOUT_ME,
    label: RoutesLabels.ABOUT_ME,
  },
  {
    path: RoutesPaths.MY_TEAM,
    label: RoutesLabels.MY_TEAM,
  },
  {
    path: RoutesPaths.SERVICES,
    label: RoutesLabels.SERVICES,
  },
  {
    path: RoutesPaths.BLOG,
    label: RoutesLabels.BLOG,
  },
  {
    path: RoutesPaths.FAQ,
    label: RoutesLabels.FAQ,
  },
  {
    path: RoutesPaths.CONTACT,
    label: RoutesLabels.CONTACT,
  },
];
