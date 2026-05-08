import { Grid } from "./Grid.js";

export function PlayerDiv(player: number) {
    const div = document.createElement("div");
    div.classList.add(`Player-${String(player)}`);
    const heading = document.createElement("h2");
    heading.textContent = `Player-${player}'s Area`;
    div.appendChild(heading);
    const grid = Grid(player);
    div.appendChild(grid);
    return div;
}
