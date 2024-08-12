import { Component } from '@angular/core';
import { Movement } from 'src/app/interfaces/movement.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { MovementsService } from 'src/app/services/movements.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-play-battle',
  templateUrl: './play-battle.page.html',
  styleUrls: ['./play-battle.page.scss'],
})
export class PlayBattlePage {

  rivalTeam: any = [];
  playerTeam: any = [];
  movementsDataJSON: Array<Movement> = [];

  constructor(
    private pokemonService: PokemonService,
    private movementsService: MovementsService,
  ) { }

  ionViewWillEnter() {
    this.movementsDataJSON = this.movementsService.getMovementsList();
    this.rivalTeam = this.getPokemonTeam(3);
    this.playerTeam = this.getPokemonTeam(3);
    console.log(this.rivalTeam);
    console.log(this.playerTeam);
    console.log(this.movementsDataJSON);

  }

  getPokemonTeam(quantity: number): Array<Pokemon> {
    let pokemons = this.pokemonService.getPokemonList();
    let team: any = [];
    while (quantity > 0) {
      let randomIdx = Math.floor(Math.random() * pokemons.length);
      let pokemonChoosen = pokemons[randomIdx];
      pokemonChoosen = this.setMovementsToPokemon(pokemonChoosen, 4);
      team.push(pokemonChoosen);
      quantity = quantity - 1;
    }
    return team;
  }

  setMovementsToPokemon(pokemon: Pokemon, numberOfMovements: number): Pokemon {
    pokemon.movements = [];
    while (numberOfMovements > 0) {
      let idxRandom = Math.floor(Math.random() * this.movementsDataJSON.length);
      pokemon.movements.push(this.movementsDataJSON[idxRandom]);
      numberOfMovements = numberOfMovements - 1;
    }
    return pokemon;
  }


}
