import { Movement } from "./movement.interface";
import { StatsValue } from "./statsValue.interface";

export interface Pokemon {
    id: number,
    name: string,
    frontSprite: string,
    backSprite: string,
    sound: string,
    type1: string,
    type2: string,
    isEvolved: boolean,
    isLegendary: boolean,
    description: string,
    statsValuesBylevel: Array<StatsValue>,
    movements?: Array<Movement>
}