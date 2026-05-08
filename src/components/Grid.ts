export function Grid(player: number) {
    const grid = document.createElement("div");
    grid.classList.add("grid-wrapper");
    for (let i = 0; i < 36; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add(
            `${String(Math.floor(i / 6) + 1)}_${String((i % 6) + 1)}`,
        );
        cell.setAttribute("player", String(player));
        grid.appendChild(cell);
    }
    return grid;
}
