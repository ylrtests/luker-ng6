import { Route } from '@angular/router';

import { AlineacionEstrategicaComponent } from './alineacion-estrategica.component';
import { DefAlineacionEstrategicaComponent } from './definiciones/def-alineacion-estrategica.component';

export const ALINEACION_ESTRATEGICA_ROUTE: Route = {
    path: '1',
    children: [
        { path: 'definiciones', component: DefAlineacionEstrategicaComponent },
        { path: '', component: AlineacionEstrategicaComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.first'
    }
};
