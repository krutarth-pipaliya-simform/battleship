export function Turn() {
    const div = document.createElement("div");
    div.classList.add("turn");
    div.textContent = "Player 1's turn";
    return div;
}
