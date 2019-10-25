import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TplCajaHerramientasComponent } from '../templates/tpl-caja-herramientas/tpl-caja-herramientas.component';

@Component({
  selector: 'jhi-vinculacion-integracion',
  templateUrl: './vinculacion-integracion.component.html',
  styleUrls: ['./vinculacion-integracion.component.scss']
})
export class VinculacionIntegracionComponent implements OnInit, OnDestroy {

  elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Descripción de cargo', url: 'https://github.com' },
          { title: 'Ficha de selección', url: 'https://github.com' },
          { title: 'Formato de entrevista', url: 'https://github.com' },
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: '',
        items: [
          { title: 'Matriz de entrenamiento', url: 'https://github.com' },
          { title: 'Verificación del proceso', url: 'https://github.com' },
          { title: 'Encuesta de satisfacción', url: 'https://github.com' },
        ]
      }
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
