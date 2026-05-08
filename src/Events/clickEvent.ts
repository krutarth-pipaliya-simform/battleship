import { cellClick } from "../utility/cellClick.js";

export function clickEvent() {
    const main = document.querySelector("main");
    main?.addEventListener("click", (e) => {
        const ele = e.target;
        if (!(ele instanceof HTMLDivElement)) return;
        switch (ele.classList[0]) {
            case "cell":
                cellClick(ele);
                break;

            default:
                break;
        }
    });
}
