export function Header() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.classList.add("main-header");
    h1.textContent = "BattleShip";
    header.appendChild(h1);
    return header;
}
