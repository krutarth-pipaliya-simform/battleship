import type { ShipPlacement } from "../logic/placement/types.js";

export function randomGenerate(size: number): ShipPlacement | false {
    let arr = [];
    let row = randomInRange(6);
    let column = randomInRange(6);
    let Horizontal = randomInRange(2) - 1 == 2 ? true : false;
    let tryAgain = false,
        found = true;
    let r = row,
        c = column;
    for (let i = 0; i < size; i++) {
        const converted = `${r}_${c}`;

        if (set.has(converted) || r > 6 || c > 6) {
            if (!tryAgain) {
                tryAgain = true;
                Horizontal = !Horizontal;
                r = row;
                c = column;
                i = -1;
                continue;
            }
            found = false;
            break;
        }
        if (Horizontal) c++;
        else r++;
    }
    if (found) {
        addToSet({
            size,
            start: {
                row,
                column,
            },
            direction: Horizontal ? "Horizontal" : "Vertical",
        });
        return {
            size,
            start: {
                row,
                column,
            },
            direction: Horizontal ? "Horizontal" : "Vertical",
        };
    }

    return false;
}

function randomInRange(range: number) {
    return Math.floor(Math.random() * range + 1);
}

export let set = new Set<string>();

function addToSet({
    size,
    start: { row, column },
    direction,
}: ShipPlacement): void {
    for (let i = 0; i < size; i++) {
        const converted = `${row}_${column}`;
        set.add(converted);
    }
}
