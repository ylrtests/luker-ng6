import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-integracion',
  templateUrl: './integracion.component.html',
  styleUrls: ['./integracion.component.scss']
})
export class IntegracionComponent implements OnInit {

  public steps = {
    // Primera aproximación
    first: [
      { 'text': '1. Llamada a firmar contrato (talento & gestión en compañia de jefe inmediato)' },
      { 'text': '2. Envío del video de bienvenida (t&g)', 'isHighlighted': true },
      { 'text': '3. Información previa de la organización (t&g)', 'isHighlighted': true },
      { 'text': '4. Solicitud documentos de ingreso' },
      { 'text': '5. Información para el primer día de ingreso', 'isHighlighted': true },
      { 'text': '6. Exámenes médicos' }
    ],
    // Primer día
    second: [
      { 'text': '1. Decoración del puesto de trabajo (personal con puesto de trabajo)' },
      { 'text': '2. Entrega de la ruta del sabor', 'isHighlighted': true },
      { 'text': '3. Entrega de la invitación a la inducción.', 'isHighlighted': true },
      { 'text': '4. Regalo de bienvenida', 'isHighlighted': true },
      { 'text': '5. Recibimiento por parte del jefe inmediato (primer o segundo dia despues del ingreso).' },
      { 'text': '6. Explicación del proceso de inducción (jefe Inmediato)' },
      { 'text': '7. Cursos virtuales (acompañamiento y asesoria)' }
    ],
    // Primer mes
    third: [
      { 'text': '1. Inducción al cargo.', 'isHighlighted': true },
      { 'text': '2. Comunicado de las nuevas caras de nuestra casa.', 'isHighlighted': true },
      { 'text': '3. Verificación del proceso de inducción.', 'isHighlighted': true }
    ],
    // Primer trimestre
    fourth: [
      { 'text': '1. Garantizar que el nuevo colaborador Realice la encuesta de satisfacción' },
      { 'text': '2. Acompañamiento del proceso de Integración' },
      { 'text': '3. Activación del balance de consecuencias', 'isHighlighted': true }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
