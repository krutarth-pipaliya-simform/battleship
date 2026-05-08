export function Button() {
    const button = document.createElement("button");
    button.classList.add("restart");
    button.textContent = "Restart";
    button.addEventListener('click', () => {
        location.reload();
    })
    return button;
}
