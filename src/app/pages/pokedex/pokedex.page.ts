import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'src/app/services/movements.service';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html', 
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage {

  pokemonSelected: any;
  isModalOpen = false;
  pokemonsDataJSON: any = [];
  backgroundAudio : any;
  backgroundSounds = [
    "Hurry Along 1 - Pokémon Black & Pokémon White (OST).mp3",
    "Hurry Along 2 - Pokémon Black & Pokémon White (OST).mp3"
  ]

  constructor( 
    private pokemonService: PokemonService,
    public movementsService: MovementsService
  ) { }

  ionViewWillEnter() {
    // let data = pokemonsData.data 
    this.pokemonsDataJSON = this.pokemonService.getPokemonList();
    console.log("Pokemon : ", this.pokemonsDataJSON);
    
    let index = Math.floor(Math.random() * 2);   
    this.backgroundAudio = new Audio('../../../assets/sounds/background/'+this.backgroundSounds[index]);
    this.backgroundAudio.volume = 0.5;
    this.backgroundAudio.loop = true;
    this.backgroundAudio.play();
  }

  getImgSource(sufix: string) {
    return "../../../assets/images/pokemons/" + sufix;
  }

  playSound(sound: string) {
    var audio = new Audio('../../../assets/sounds/pokemons/'+sound);
    audio.volume = 0.3;
    audio.play();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setPokemonSelected(pokemon:any){
    this.pokemonSelected = null;
    this.pokemonSelected = pokemon;
  }

  ionViewWillLeave(){
    this.backgroundAudio.pause()
  }

}
