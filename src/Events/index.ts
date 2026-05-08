import { clickEvent } from "./clickEvent.js";
import { timerEvent } from "./timerEvent.js";

export function startEvents() {
    clickEvent();
    timerEvent(30);
}
