import { Injectable } from '@angular/core';
import pokemonsData from "../data/pokemons.json";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // pokemonsDataJSON: any = pokemonsData.data;
  constructor() { }

  getPokemonList(){
    return pokemonsData.data;
  }
}
