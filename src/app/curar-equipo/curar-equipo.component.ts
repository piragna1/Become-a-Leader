import { Component } from '@angular/core';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-curar-equipo',
  standalone: true,
  imports: [],
  templateUrl: './curar-equipo.component.html',
  styleUrl: './curar-equipo.component.css'
})
export class CurarEquipoComponent {
  curacionRealizada = false;
  equipo:Pokemon[]=[];
  curarPokemons(){
    for (let index = 0; index < this.equipo.length; index++) {
      this.restaurarHp(this.equipo[index]);
    }
  }
  restaurarHp(pokemon:Pokemon){
    pokemon.hp=pokemon.maxHp;
  }
}
