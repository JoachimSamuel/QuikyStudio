document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle"); // Sélectionner tous les éléments avec la classe toggle
  const eCommerce = document.querySelector(".e-commerce");
  const siteVitrine = document.querySelector(".site-vitrine");

  eCommerce.style.display = "none"; // Afficher Vitrine par défaut
  siteVitrine.style.display = "block"; // Cacher siteVitrine

  toggles.forEach((toggle) => {
    // Ajouter un événement click à chaque élément toggle
    toggle.addEventListener("click", () => {
      eCommerce.style.display =
        eCommerce.style.display === "block" ? "none" : "block";
      siteVitrine.style.display =
        siteVitrine.style.display === "block" ? "none" : "block";
    });
  });
});
