import { Component } from '@angular/core';
import pokemonsData from "../../data/pokemons.json";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  pokemonsDataJSON: any = pokemonsData.data;

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


