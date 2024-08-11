import { Injectable } from '@angular/core';
import typeChartData from "../data/typeChart.json";


@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor() { }

  getTranslation(key: string) {
    switch (key) {
      case "fire":
        return "Fuego";
      case "normal":
        return "Normal";
      case "water":
        return "Agua";
      case "flying":
        return "Volador";
      case "fighting":
        return "Lucha";
      case "grass":
        return "Planta";
      case "poison":
        return "Veneno";
      case "electric":
        return "Eléctrico";
      case "ground":
        return "Tierra";
      case "psychic":
        return "Psíquico";
      case "rock":
        return "Roca";
      case "ice":
        return "Hielo";
      case "bug":
        return "Bicho";
      case "dragon":
        return "Dragón";
      default:
        return "";
    }
  }

  getEffectivityValueForAttack(attackType: string, defenseType1: string, defenseType2?: string) {
    let typeChart = typeChartData.data;
    // console.log(typeChart)
    let valuesByType = typeChart.filter(t => t.typeAttack == attackType);
    
    Object.entries(valuesByType[0].effectivity).forEach(([key, value]) => {
      if(key == defenseType1){
        console.log(attackType + " contra "+ defenseType1 +" = "+ value) // key - value
      }
  })

  }


}
