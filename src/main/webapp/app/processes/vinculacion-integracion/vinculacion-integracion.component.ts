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
          { title: 'Descripción de cargo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Ficha de selección', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Formato de entrevista', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: '',
        items: [
          { title: 'Matriz de entrenamiento', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Verificación del proceso', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Encuesta de satisfacción', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
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
