// retoruClients

const retourClients = [
  {
    stars: 4,
    comment:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Hotel Innsbruck",
    business: "Manager",
    photo: "public/images/nina.png",
    category: "site web",
  },
  {
    name: "ACME Hotel",
    business: "CEO",
    stars: 5,
    comment: "A luxurious hotel with exceptional service and amenities.",
    photo: "public/images/1673345057560~2 (1).jpg",
    category: "community management",
  },
  {
    name: "Mountain View Hotel",
    business: "Receptionist",
    stars: 3,
    comment: "A cozy hotel with a stunning view of the mountains.",
    photo: "public/images/_3ee70bcb-63be-4588-8fe7-e7106902e275.jpeg",
    category: "Creation graphique",
  },
  {
    name: "City Center Hotel",
    business: "Housekeeping",
    stars: 4,
    comment: "A modern hotel located in the heart of the city.",
    photo: "",
    category: "site web",
  },
  {
    name: "City Center Hotel",
    business: "Housekeeping",
    stars: 4,
    comment: "A modern hotel located in the heart of the city.",
    photo: "https://example.com/city-center-hotel.jpg",
    category: "site web",
  },
  {
    name: "City Center Hotel",
    business: "Housekeeping",
    stars: 4,
    comment: "A modern hotel located in the heart of the city.",
    photo: "https://example.com/city-center-hotel.jpg",
    category: "site web",
  },
  {
    name: "City Center Hotel",
    business: "Housekeeping",
    stars: 4,
    comment: "A modern hotel located in the heart of the city.",
    photo: "https://example.com/city-center-hotel.jpg",
    category: "site web",
  },
];

// Récupération des éléments du DOM
const carousel = document.querySelector(".carousel");
const inner = document.querySelector(".inner");
const map = document.querySelector(".map");

// Génération des cartes du carrousel
retourClients.forEach((retourClient, index) => {
  const card = document.createElement("div");
  card.className = "card-carrousel with-logo"; // Ajout de la classe 'with-logo'
  card.innerHTML = `
    <div class="image-container">
      <img src="${retourClient.photo}" alt="${
    retourClient.name
  }" class="client-image">
    </div>
    <div style="display: flex; flex-direction: column; padding: 5px; justify-content: space-between">
      <div class="rating">
        ${Array.from({ length: 5 }, (_, i) => {
          const rating = i + 1;
          return `
            <span class="star ${
              rating <= retourClient.stars ? "selected" : ""
            }" data-rating="${rating}">&#x2605;</span>
          `;
        }).join("")}
      </div>
      <p>${retourClient.comment}</p>
      <div class="card-retourt-client-name-post">
        <h4>${retourClient.name}</h4> <h5>${retourClient.business}</h5>
      </div>
    </div>
  `;
  inner.appendChild(card);
});

// Autoplay
//let currentSlide = 0;
//setInterval(() => {
// const buttons = map.children;
// buttons[currentSlide].classList.remove("active");
// currentSlide = (currentSlide + 1) % buttons.length;
// buttons[currentSlide].classList.add("active");
//  inner.style.transform = `translateX(-${currentSlide * 100}%)`;
//}, 10000);
