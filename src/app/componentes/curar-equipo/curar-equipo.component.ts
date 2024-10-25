import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogosComponent } from '../../../shared_module/dialogos/dialogos.component';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-curar-equipo',
  standalone: true,
  imports: [DialogosComponent, CommonModule],
  templateUrl: './curar-equipo.component.html',
  styleUrl: './curar-equipo.component.css'
})
export class CurarEquipoComponent {
  mostrarDialogo:boolean=true;
  curacionRealizada:boolean = false;
  equipo:Pokemon[]=[];
  textoDialogo:string="Quieres curar a tus pokemon?";
  opciones:string[]=['Curar','Volver'];
  curarPokemons(){
    for (let index = 0; index < this.equipo.length; index++) {
      this.restaurarHp(this.equipo[index]);
    }
    this.curacionRealizada = true;
  }
  restaurarHp(pokemon:Pokemon){
    pokemon.hp=pokemon.maxHp;
  }
  recibirOpcionElegida(input:string){
    if(input ===this.opciones[0]){
      this.curarPokemons();
      this.textoDialogo='Has curado a tus pokemon.';
    }
    else if (input ===this.opciones[1]){
      //volver
    }
  }
}
