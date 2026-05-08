import { PlayerTurn } from "../logic/turnSync.js";

export function cellClick(ele: HTMLDivElement) {
    let attr = ele.getAttribute("player");
    if (!attr) return;
    let player = +attr;
    if (PlayerTurn != player) {
        console.log("not your turn");
        return;
    }
}
