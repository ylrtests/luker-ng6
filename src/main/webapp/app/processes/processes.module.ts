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
import { AlineacionEstrategicaComponent } from './alineacion-estrategica/alineacion-estrategica.component';
import { DefAlineacionEstrategicaComponent } from './alineacion-estrategica/definiciones/def-alineacion-estrategica.component';
import { SistemaPlaneacionComponent } from './alineacion-estrategica/sistema-planeacion/sistema-planeacion.component';

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
        AlineacionEstrategicaComponent,
        DefAlineacionEstrategicaComponent,
        SistemaPlaneacionComponent,
    ]
})
export class LukerProcessesModule { }
