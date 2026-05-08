import type { AllPlacement, ShipPlacement } from "./types.js";

export const shipPlacement: AllPlacement = {
    player1: [
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
    ],
    player2: [
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
    ],
};
