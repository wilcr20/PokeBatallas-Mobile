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
    this.movementsService.getEffectivityValueForAttack("grass", "water");
    this.movementsService.getEffectivityValueForAttack("fire", "poison");
    this.movementsService.getEffectivityValueForAttack("water", "rock");
    this.movementsService.getEffectivityValueForAttack("dragon", "dragon");
    this.movementsService.getEffectivityValueForAttack("psychic", "ghost");
    this.movementsService.getEffectivityValueForAttack("fighting", "ghost");
  }

  

  redirectToPokedexPage(){
    this.router.navigateByUrl("/pokedex")
  }

}


