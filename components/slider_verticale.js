const fixedSection = document.querySelector(".fixed-section") || null;
const cards = document.querySelectorAll(".arguments-card") || [];
const header = document.querySelector(".text-aguments ") || null; // Sélectionne le h2 à l'intérieur de .fixed-section

let isFixed = false;
let lastCardTop = 0;

if (cards.length && header) {
  window.addEventListener("scroll", function () {
    const firstCardRect = cards[0].getBoundingClientRect();
    const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

    const firstCardDistanceFromTop = firstCardRect.top;
    const lastCardDistanceFromBottom = window.innerHeight - lastCardRect.bottom;

    const isAtTop = firstCardDistanceFromTop <= 150;
    const isAtBottom = lastCardDistanceFromBottom <= 150;

    // Journalisation des informations pour le débogage
    console.log("----------------------");
    console.log("Défilement en cours...");
    console.log("Position de la première carte :", firstCardDistanceFromTop);
    console.log("Position de la dernière carte :", lastCardDistanceFromBottom);
    console.log("isAtTop :", isAtTop);
    console.log("isAtBottom :", isAtBottom);
    console.log("isFixed :", isFixed);

    if (isAtTop && !isFixed) {
      header.style.position = "sticky";
      header.style.top = "10rem";
      isFixed = true;
      console.log("Titre fixé en haut !");
    } else if (!isAtTop && isFixed) {
      header.style.position = "static";
      header.style.top = null;
      isFixed = false;
      console.log("Titre détaché !");
    }

    lastCardTop = lastCardRect.top;
  });
}
