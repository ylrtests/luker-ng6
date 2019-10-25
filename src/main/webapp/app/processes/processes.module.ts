import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PROCESSES_ROUTE } from './processes.route';

import { LukerSharedModule } from 'app/shared/shared.module';
import { ProcessesComponent } from './processes.component';
import { TplDefinicionesComponent } from './templates/tpl-definiciones/tpl-definiciones.component';
import { TplCajaHerramientasComponent } from './templates/tpl-caja-herramientas/tpl-caja-herramientas.component';
import { VinculacionIntegracionComponent } from './vinculacion-integracion/vinculacion-integracion.component';
import { VinculacionComponent } from './vinculacion-integracion/vinculacion/vinculacion.component';
import { IntegracionComponent } from './vinculacion-integracion/integracion/integracion.component';
import { DefVinculacionIntegracionComponent } from './vinculacion-integracion/definiciones/def-vinculacion-integracion.component';

@NgModule({
    imports: [LukerSharedModule, RouterModule.forChild([PROCESSES_ROUTE])],
    declarations: [
        ProcessesComponent,
        TplDefinicionesComponent,
        TplCajaHerramientasComponent,
        VinculacionIntegracionComponent,
        VinculacionComponent,
        IntegracionComponent,
        DefVinculacionIntegracionComponent,
    ]
})
export class LukerProcessesModule { }
