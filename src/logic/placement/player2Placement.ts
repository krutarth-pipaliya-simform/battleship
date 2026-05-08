import type { ShipPlacement } from "./types.js";

export const player2Placement: Array<ShipPlacement> = [
    {
        size: 2,
        start: {
            row: 1,
            column: 1,
        },
        direction: "Horizontal",
    },
    {
        size: 2,
        start: {
            row: 2,
            column: 1,
        },
        direction: "Horizontal",
    },
    {
        size: 3,
        start: {
            row: 1,
            column: 1,
        },
        direction: "Vertical",
    },
];
