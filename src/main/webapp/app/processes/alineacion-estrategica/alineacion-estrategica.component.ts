import { Component, OnInit, ViewChild } from '@angular/core';
import { TplCajaHerramientasComponent } from '../templates/tpl-caja-herramientas/tpl-caja-herramientas.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'jhi-alineacion-estrategica',
  templateUrl: './alineacion-estrategica.component.html',
  styleUrls: ['./alineacion-estrategica.component.scss']
})
export class AlineacionEstrategicaComponent implements OnInit {
  elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Definición estratégica área', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Plan anual área Excel', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Plan anual área Presentación', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Instructivo agendas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Seguimiento mensual ', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Seguimiento cuatrimestral ', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: 'Definición\nestratégica',
        items: [
          { title: 'Compañía', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Mercadeo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Comercial', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Talento', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Cabas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Logística', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Proyectos comerciales', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      },
      {
        subtitle: 'Plan\nanual',
        items: [
          { title: 'Comercial', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Mercadeo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Cabas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Logística', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Talento', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Proyectos comerciales', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };
  modalReference: any;

  @ViewChild(TplCajaHerramientasComponent) cajaHerramientas: TplCajaHerramientasComponent;

  constructor(private modalService: NgbModal, private location: PlatformLocation) { }

  ngOnInit() {
  }

  openDefinicionEstrategica(modal) {
    this.modalReference = this.modalService.open(modal, { windowClass: 'modal-def' });
    // Closes modal when back button is clicked
    this.location.onPopState(() => this.modalReference.close());
  }

}
