import { changeTurn } from "../logic/turnSync.js";

export function timerEvent(sec: number) {
    const timer = document.querySelector(".timer");

    if (timer) timer.textContent = String(sec);
    setInterval(() => {
        let remaining: number = 60;
        const timer = document.querySelector(".timer");
        if (timer) remaining = +timer.textContent;
        if (remaining === 0 && timer) {
            changeTurn();
            timer.textContent = "30";
        } else if (timer) {
            timer.textContent = String(remaining - 1);
        }
    }, 1000);
}

export function resetTimer() {
    timerEvent;
}
