import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MovementsService } from 'src/app/services/movements.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private movementsService: MovementsService
  ) { }

  

  ionViewWillEnter() {
    this.movementsService.getEffectivityValueForAttack("ice", "grass", "dragon");
    this.movementsService.getEffectivityValueForAttack("poison", "ground", "rock");
    this.movementsService.getEffectivityValueForAttack("fire", "normal", "rock");
    this.movementsService.getEffectivityValueForAttack("fighting", "normal", "poison");
    this.movementsService.getEffectivityValueForAttack("poison", "bug", "fire"); // good
    this.movementsService.getEffectivityValueForAttack("fighting", "ghost", "normal");
    this.movementsService.getEffectivityValueForAttack("water", "water");
  }

  

  redirectToPokedexPage(){
    this.router.navigateByUrl("/pokedex")
  }

  redirectToPokemonBattlePage(){
    this.router.navigateByUrl("/play-battle")

  }

}


