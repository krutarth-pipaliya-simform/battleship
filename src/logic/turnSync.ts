export let PlayerTurn: 1 | 2 = 1;

export function turnSync() {
    const element = document.querySelector(".turn");
    if (element) element.textContent = `Player ${PlayerTurn}'s turn`;
}

export function changeTurn() {
    if (PlayerTurn === 1) PlayerTurn = 2;
    else PlayerTurn = 1;
    turnSync();
}
