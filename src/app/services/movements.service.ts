import { Injectable } from '@angular/core';

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
}
