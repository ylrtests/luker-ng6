import { Route } from '@angular/router';
import { VINCULACION_INTEGRACION_ROUTE } from './vinculacion-integracion/vinculacion-integracion.route';
import { ALINEACION_ESTRATEGICA_ROUTE } from './alineacion-estrategica/alineacion-estrategica.route';
import { PLANEACION_ESTRUCTURA_ROUTE } from './planeacion-estructura/planeacion-estructura.route';
import { ProcessesComponent } from './processes.component';

export const PROCESSES_ROUTE: Route = {
  path: 'proceso',
  component: ProcessesComponent,
  children: [
    ALINEACION_ESTRATEGICA_ROUTE,
    VINCULACION_INTEGRACION_ROUTE,
    PLANEACION_ESTRUCTURA_ROUTE,
    {
      path: '',
      redirectTo: '3',
      pathMatch: 'full',
    }
  ],

  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
