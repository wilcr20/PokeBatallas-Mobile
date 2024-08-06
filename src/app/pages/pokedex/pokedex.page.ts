import { Component, OnInit } from '@angular/core';
import pokemonsData from "../../data/pokemons.json";
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage {

  pokemonsDataJSON: any = pokemonsData.data;

  constructor() { }

  ionViewWillEnter() {
    // let data = pokemonsData.data 
    console.log("Pokemon : ", this.pokemonsDataJSON);
  }

  getImgSource(pokemon: any, sufix: string) {
    return "../../../assets/images/pokemons/" + sufix;
  }

  playSound(sound: string) {
    var audio = new Audio('../../../assets/sounds/pokemons/'+sound);
    audio.volume = 0.2;
    audio.play();
  }

}
