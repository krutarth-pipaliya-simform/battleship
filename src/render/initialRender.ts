import { Header } from "../components/header.js";
import { Main } from "../components/Main.js";
import { PlayerDiv } from "../components/PlayerDiv.js";
import { Turn } from "../components/Turn.js";

export function initialRender() {
    const app = document.querySelector(".app");

    const header = Header();
    header.appendChild(Turn());
    app?.appendChild(header);

    const main = Main();
    const player1 = PlayerDiv("Player-1");

    const player2 = PlayerDiv("Player-2");
    main.appendChild(player1);
    main.appendChild(player2);
    app?.appendChild(main);
}
