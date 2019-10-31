import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-talento',
  templateUrl: './talento.component.html',
  styleUrls: ['./talento.scss']
})
export class TalentoComponent implements OnInit, AfterViewInit, OnDestroy {
  public processClasses: any;

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
   * Método que válidaría si el usuario puede
   * o no ver el botón de caja de herramientas
   */
  canShowCajaHerramientas() {
    return true;
  }

}
