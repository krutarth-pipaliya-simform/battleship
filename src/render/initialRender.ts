import { Button } from "../components/Button.js";
import { Header } from "../components/header.js";
import { Main } from "../components/Main.js";
import { PlayerDiv } from "../components/PlayerDiv.js";
import { Timer } from "../components/Timer.js";
import { Turn } from "../components/Turn.js";

export function initialRender() {
    const app = document.querySelector(".app");
    if (app) app.innerHTML = "";

    const header = Header();
    header.appendChild(Turn());
    header.appendChild(Timer());
    header.appendChild(Button());
    app?.appendChild(header);

    const main = Main();
    const player1 = PlayerDiv(1);
    const player2 = PlayerDiv(2);
    main.appendChild(player1);
    main.appendChild(player2);
    app?.appendChild(main);
}
