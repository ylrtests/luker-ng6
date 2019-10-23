import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PROCESSES_ROUTE } from './processes.route';

import { LukerSharedModule } from 'app/shared/shared.module';
import { ProcessesComponent } from './processes.component';
import { VinculacionIntegracionComponent } from './vinculacion-integracion/vinculacion-integracion.component';
import { VinculacionComponent } from './vinculacion-integracion/vinculacion/vinculacion.component';
import { IntegracionComponent } from './vinculacion-integracion/integracion/integracion.component';

@NgModule({
    imports: [LukerSharedModule, RouterModule.forChild([PROCESSES_ROUTE])],
    declarations: [
        ProcessesComponent,
        VinculacionIntegracionComponent,
        VinculacionComponent,
        IntegracionComponent
    ]
})
export class LukerProcessesModule { }
