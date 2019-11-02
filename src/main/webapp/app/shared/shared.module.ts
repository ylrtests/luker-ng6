import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { LukerSharedLibsModule, LukerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { MapLukerComponent } from './map-luker/map-luker.component';
import { UniversidadLogoComponent } from './universidad-logo/universidad-logo.component';

@NgModule({
    imports: [LukerSharedLibsModule, LukerSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, MapLukerComponent, UniversidadLogoComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [LukerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, MapLukerComponent, UniversidadLogoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LukerSharedModule {}
