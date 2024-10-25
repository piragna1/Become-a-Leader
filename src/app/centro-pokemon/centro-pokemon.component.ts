import { Component } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centro-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centro-pokemon.component.html',
  styleUrl: './centro-pokemon.component.css'
})
export class CentroPokemonComponent {
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
