import { Injectable } from '@angular/core';
import pokemonsData from "../data/pokemons.json";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList(){
    return pokemonsData.data;
  }
}
