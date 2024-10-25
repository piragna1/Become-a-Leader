import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dialogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogos.component.html',
  styleUrl: './dialogos.component.css'
})

export class DialogosComponent implements OnInit{
  @Input() text: string = "";
  @Input() characterImage?: string;
  @Input() options: string[] = [];

  @Output() opcionElegida = new EventEmitter();

  constructor( ) {
  }


  ngOnInit() {
  }


  /**
   * Maneja la selección de una opción en el diálogo
   *
   * Emite el string de la opción seleccionada
   * @param option string de la opción seleccionada
   */
  enviarOpcionElegida(option: string) {
    // Lógica para manejar la selección de opciones
    this.opcionElegida.emit(option);
  }
}
