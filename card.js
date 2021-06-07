const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        closeExpandedCard()
        card.classList.add("active");
    });
})

function closeExpandedCard() {
    cards.forEach(card => {
        card.classList.remove("active");
    })
}