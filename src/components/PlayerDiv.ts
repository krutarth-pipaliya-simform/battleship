import { Grid } from "./Grid.js";

export function PlayerDiv(player: string) {
    const div = document.createElement("div");
    div.classList.add(player);
    const heading = document.createElement("h2");
    heading.textContent = player;
    div.appendChild(heading);
    const grid = Grid();
    div.appendChild(grid);
    return div;
}
