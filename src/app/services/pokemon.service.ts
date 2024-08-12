import { Injectable } from '@angular/core';
import pokemonsData from "../data/pokemons.json";
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList(): Array<Pokemon>{
    return pokemonsData.data as Array<Pokemon>;
  }
}
