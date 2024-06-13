// Créez un tableau de projets avec des catégories
const projects = [
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: ["Site Vitrine"],
  },
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: "E-Commerce",
  },
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: "Site Vitrine",
  },
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: "Site Vitrine",
  },
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: "Site Vitrine",
  },
  {
    image: "/public/images/Body.png",
    logo: "/public/Logo/goutes_orange.svg",
    entreprise: "Magoly",
    title: "Projet 1",
    description: "Description du projet 1",
    categorie: "Site Vitrine",
  },
  // Ajoutez autant de projets que vous le souhaitez
];

// Sélectionnez le conteneur où vous souhaitez afficher les cartes
const cardContainer = document.getElementById("card-projet-container");
console.log(cardContainer);

// Sélectionnez les boutons de filtre
const filterButtons = document.querySelectorAll(".btn-filtrer");

// Créez une fonction pour générer une carte à partir d'un projet
function createCard(project) {
  const card = document.createElement("div");
  card.className = "card-projet";

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = "";
  card.appendChild(img);

  const cardText = document.createElement("div");
  cardText.className = "card-projet-text";

  const cardTextEntreprise = document.createElement("div");
  cardTextEntreprise.className = "card-text-entreprise";

  const titleImg = document.createElement("img");
  titleImg.src = project.logo; // Image pour le titre, si vous en avez besoin
  titleImg.alt = "";
  cardTextEntreprise.appendChild(titleImg);

  const entrepriseName = document.createElement("p");
  entrepriseName.textContent = project.entreprise;
  cardTextEntreprise.appendChild(entrepriseName);

  cardText.appendChild(cardTextEntreprise);

  const categorie = document.createElement("p");
  categorie.className = "card-projet-text-categorie";
  categorie.textContent = project.categorie;
  cardText.appendChild(categorie);
  card.appendChild(cardText);

  return card;
}

// Créez une fonction pour filtrer les cartes
function filterCards(categorie) {
  // Supprimez les cartes existantes
  cardContainer.innerHTML = "";

  // Filtrez les projets en fonction de la catégorie
  const filteredProjects = projects.filter((project) => {
    if (categorie === "tous") {
      return true;
    } else {
      return project.categorie === categorie;
    }
  });

  // Générez les cartes filtrées
  filteredProjects.forEach((project) => {
    const card = createCard(project);
    cardContainer.appendChild(card);
  });
}

// Ajoutez un événement click aux boutons de filtre
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const categorie = button.dataset.categorie;
    filterCards(categorie);

    // Remove the active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("btn-filtrer-active"));

    // Add the active class to the current button
    button.classList.add("btn-filtrer-active");
  });
});

// Set the default button to "tous" and add the active class
const defaultButton = filterButtons[0];
defaultButton.classList.add("btn-filtrer-active");

// Générez les cartes initiales
filterCards("tous");
