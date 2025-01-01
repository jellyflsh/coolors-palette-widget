document.querySelectorAll('.totoro').forEach(totoro => {
    const randomDuration = Math.random() * 2 + 3; // Durée entre 3 et 5 secondes
    const randomDelay = Math.random() * 2; // Délai entre 0 et 2 secondes
    totoro.style.animationDuration = `${randomDuration}s`;
    totoro.style.animationDelay = `${randomDelay}s`;
});
