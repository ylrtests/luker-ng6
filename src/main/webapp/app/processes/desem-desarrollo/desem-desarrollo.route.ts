import { Route } from '@angular/router';

import { DesemDesarrolloComponent } from './desem-desarrollo.component';
import { DefDesemDesarrolloComponent } from './definiciones/def-desem-desarrollo.component';
import { UniversidadLukerComponent } from './universidad-luker/universidad-luker.component';

export const DESEM_DESARROLLO_ROUTE: Route = {
    path: '4',
    children: [
        { path: 'definiciones', component: DefDesemDesarrolloComponent },
        { path: 'universidad', component: UniversidadLukerComponent },
        { path: '', component: DesemDesarrolloComponent, pathMatch: 'full' }
    ],
    data: {
        pageTitle: 'processes.fourth'
    }
};
