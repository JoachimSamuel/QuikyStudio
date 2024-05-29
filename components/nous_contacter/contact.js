document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/nous_contacter/contact.php")
    .then((response) => response.text())
    .then((data) => {
      // Sélectionnez l'élément où vous voulez insérer le footer
      const targetElement = document.querySelector("#contac-section");

      // Insérez le contenu HTML récupéré à l'intérieur de l'élément cible
      targetElement.innerHTML = data;
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du footer:", error)
    );
});
