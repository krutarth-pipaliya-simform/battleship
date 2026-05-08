import { randomGenerate, set } from "../../utility/randomGenerate.js";
import type { AllPlacement, ShipPlacement } from "./types.js";

export const shipPlacement: AllPlacement = {
    player1: [],
    player2: [],
};
export function generatePlacement(player: number) {
    for (let i = 0; i < 2; i++) {
        let obj: false | ShipPlacement = false;
        while (!obj) {
            obj = randomGenerate(2);
        }
        if (obj) shipPlacement[`player${player}`]?.push(obj);
    }
    let obj: false | ShipPlacement = false;
    while (!obj) {
        obj = randomGenerate(3);
    }
    if (obj) shipPlacement[`player${player}`]?.push(obj);
}

export function initialisePlacement() {
    generatePlacement(1);
    set.clear();
    generatePlacement(2);
    console.log(shipPlacement);
}

export const selected = [new Set<string>(), new Set<string>()];
