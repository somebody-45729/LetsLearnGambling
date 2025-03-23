document.addEventListener("DOMContentLoaded", () => {
    function flipCard(card) {
        card.classList.toggle('flipped');
    }

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            flipCard(this);
        });
    });
});