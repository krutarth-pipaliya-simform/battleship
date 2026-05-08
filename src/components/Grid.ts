export function Grid() {
    const grid = document.createElement("div");
    grid.classList.add("grid-wrapper");
    for (let i = 0; i < 36; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("row", String(Math.floor(i / 6) + 1));
        cell.setAttribute("column", String((i % 6) + 1));
        grid.appendChild(cell);
    }
    return grid;
}
