import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-talento',
  templateUrl: './talento.component.html',
  styleUrls: ['./talento.scss']
})
export class TalentoComponent implements OnInit, AfterViewInit, OnDestroy {
  public processClasses: any;
  elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Grupo 1 Módulo 2 Definiendo el norte', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 1 Módulo 3 Conformando al mejor equipo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 1 Módulo 4 Logrando los mejores resultados', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 1 Módulo 5 Comprometiendo e integrando a nuestros equipos', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 1 Módulo 6 Gestionar el desempeño y desarrollar a nuestro equipo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 1 Módulo 7 Maestros que comprometen a sus equipos', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      }
    ],
    second: [
      {
        subtitle: '',
        items: [
          { title: 'Grupo 2 Módulo 2 Conformando e integrando al mejor equipo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 2 Módulo 3 Logrando los mejores resultados', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Grupo 2 Módulo 4 Maestros que comprometen a sus equipos.', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      }
    ]
  };

  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2, private location: Location) { }

  ngOnInit() {
    this.processClasses = {
      'bg': 'bg-brand',
      'color': 'text-brand',
      'icon': 'primary'
    };
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.body.style.fontFamily = 'Hermes';
    this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card').style.padding = '0';
  }

  ngOnDestroy() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body, 'style');
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card'), 'style');
  }

  // Función que se usa para volver a la página anterior
  goBack() {
    this.location.back();
  }

  /**
   * Método que validaría si el usuario puede
   * o no ver el botón de caja de herramientas
   */
  canShowCajaHerramientas() {
    return true;
  }

}
