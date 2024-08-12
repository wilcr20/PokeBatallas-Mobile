import { Injectable } from '@angular/core';
import typeChartData from "../data/typeChart.json";
import movementsData from "../data/movements.json";
import { Movement } from '../interfaces/movement.interface';


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

  getMovementsList(): Array<Movement> {
    return movementsData.data as Array<Movement>;
  }

  getEffectivityValueForAttack(attackType: string, defenseType1: string, defenseType2?: string) {
    let typeChart = typeChartData.data;
    // console.log(typeChart)
    let valuesByType = typeChart.filter(t => t.typeAttack == attackType);
    let effectivityValue = 1;
    Object.entries(valuesByType[0].effectivity).forEach(([key, value]) => {
      if (key == defenseType1) {
        effectivityValue = effectivityValue * value;
      }
      if (defenseType2) {
        if (key == defenseType2) {
          effectivityValue = effectivityValue * value;
        }
      }
    })
    console.log("Efectividad final de " + attackType + " contra " + defenseType1 + "/" + defenseType2 + ": " + effectivityValue);
  }


}
