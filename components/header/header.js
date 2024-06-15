document.addEventListener("DOMContentLoaded", function () {
  fetch("./components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du header:", error)
    );
});
