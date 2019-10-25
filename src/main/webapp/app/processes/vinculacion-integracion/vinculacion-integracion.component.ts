import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TplCajaHerramientasComponent } from '../templates/tpl-caja-herramientas/tpl-caja-herramientas.component';

@Component({
  selector: 'jhi-vinculacion-integracion',
  templateUrl: './vinculacion-integracion.component.html',
  styleUrls: ['./vinculacion-integracion.component.scss']
})
export class VinculacionIntegracionComponent implements OnInit, OnDestroy {

  modalElements = {
    first: [
      { title: 'Descripción de cargo', url: 'www.google.com' },
      { title: 'Ficha de selección', url: 'www.google.com' },
      { title: 'Formato de entrevista', url: 'www.google.com' },
    ],
    second: [
      { title: 'Matriz de entrenamiento', url: 'www.google.com' },
      { title: 'Verificación del proceso', url: 'www.google.com' },
      { title: 'Encuesta de satisfacción', url: 'www.google.com' },
    ]
  };

  @ViewChild(TplCajaHerramientasComponent) cajaHerramientas: TplCajaHerramientasComponent;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.modalService.dismissAll();
  }

}
