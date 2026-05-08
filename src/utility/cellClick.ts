import { selected, shipPlacement } from "../logic/placement/shipPlacement.js";
import { changeTurn, PlayerTurn } from "../logic/turnSync.js";

export function cellClick(ele: HTMLDivElement) {
    const attr = ele.getAttribute("player");
    const position = ele.classList[1];
    if (!attr || !position) return;
    let opponent = +attr;
    let set;
    if (opponent === 1 && selected[0]) {
        set = selected[0];
    } else if (selected[1]) {
        set = selected[1];
    } else {
        return;
    }
    if (set?.has(position)) return;
    if (PlayerTurn === opponent) {
        alert(`It's Player-${opponent}'s turn`);
        return;
    }
    const opponentPlacement = shipPlacement[`player${opponent}`];
    if (!opponentPlacement || !opponentPlacement.length) {
        alert(`player ${opponent} Won`);
        return;
    }
    let found = false;
    for (let ship of opponentPlacement) {
        let row = ship.start.row;
        let column = ship.start.column;
        for (let i = 0; i < ship.size; i++) {
            const converted = `${row}_${column}`;
            if (ship.direction === "Horizontal") {
                column++;
            } else {
                row++;
            }
            if (set.has(converted)) {
                continue;
            }

            if (converted === position) {
                set.add(converted);
                ele.classList.add("correct-select");
                found = true;
                break;
            }
        }
    }
    if (found === false) {
        ele.classList.add("wrong-select");
    }
    changeTurn();
}
