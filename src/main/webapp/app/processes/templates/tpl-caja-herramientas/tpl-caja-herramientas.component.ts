import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-tpl-caja-herramientas',
  templateUrl: './tpl-caja-herramientas.component.html',
  styleUrls: ['./tpl-caja-herramientas.scss']
})
export class TplCajaHerramientasComponent implements OnInit {

  @ViewChild('modalTools') modalCajaHerramientas: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(this.modalCajaHerramientas, { windowClass: 'toolbox' });
  }

}
