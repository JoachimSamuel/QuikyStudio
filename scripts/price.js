document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle");
  const eCommerce = document.querySelector(".e-commerce");
  const siteVitrine = document.querySelector(".site-vitrine");

  eCommerce.style.display = "none";
  siteVitrine.style.display = "block";

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      if (siteVitrine.style.display === "block") {
        eCommerce.style.display = "block";
        siteVitrine.style.display = "none";
      } else {
        eCommerce.style.display = "none";
        siteVitrine.style.display = "block";
      }

      toggles.forEach((t) => {
        t.classList.remove("toggle--slide", "toggle--active");
      });

      event.target.classList.add("toggle--slide", "toggle--active");

      // Si toggle--slide n'est pas présent, ajoute toggle
      if (!event.target.classList.contains("toggle--slide")) {
        event.target.classList.add("toggle");
      }
    });
  });
});
