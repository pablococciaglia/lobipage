export enum Description {
  autismo = 'autismo',
  tdah = 'tdah',
  aacc = 'aacc',
  toc = 'toc',
  tcc = 'tcc',
  capacitaciones = 'capacitaciones',
  supervisiones = 'supervisiones',
  integrales = 'integrales',
}

export const servicesTexts = [
  {
    title: 'Evaluaciones de Autismo',
    screen: Description.autismo,
  },
  {
    title: 'Evaluaciones de TDAH',
    screen: Description.tdah,
  },
  {
    title: 'Evaluaciones de AACC (Altas Capacidades)',
    screen: Description.aacc,
  },

  {
    title: 'Evaluaciones de TOC (Trastorno Obsesivo-Copulsivo)',
    screen: Description.toc,
  },
  {
    title: 'Tratamientos TCC / ACT / EPR, desde un enfoque neuroafirmativo.',
    screen: Description.tcc,
  },
  {
    title: 'Supervisiones',
    screen: Description.supervisiones,
  },
  {
    title: 'Capacitaciones',
    screen: Description.capacitaciones,
  },
  {
    title: 'Evaluaciones integrales',
    screen: Description.integrales,
  },
];
