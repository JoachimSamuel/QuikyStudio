function displayClientFeedbacks() {
  // Attendre que la promesse soit résolue
  dataPromise
    .then(({ clientsData }) => {
      console.log(clientsData);
      if (!clientsData) {
        console.error("Erreur : Les données clients sont undefined.");
        return;
      }

      const retoursClientsSection = document.getElementById(
        "slider-retour-client"
      );

      // Créer une carte pour chaque client
      clientsData.forEach((client) => {
        // Créer un conteneur de carte
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-retour-client");

        // Créer une image pour le client
        const img = document.createElement("img");
        img.src = client.photo;
        img.alt = client.name + " Photo";
        cardContainer.appendChild(img);

        // Créer un conteneur de texte pour les détails du client
        const textContainer = document.createElement("div");
        textContainer.classList.add("card-retour-client-text");

        // Ajouter le nom du client
        const clientName = document.createElement("h2");
        clientName.textContent = client.name;
        textContainer.appendChild(clientName);

        // Ajouter le commentaire du client
        const clientComment = document.createElement("p");
        clientComment.textContent = client.comment;
        textContainer.appendChild(clientComment);

        // Ajouter d'autres détails si nécessaire, comme le nombre d'étoiles, etc.

        // Ajouter le conteneur de texte à la carte
        cardContainer.appendChild(textContainer);

        // Ajouter la carte à la section des retours clients
        retoursClientsSection.appendChild(cardContainer);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de l'affichage des retours clients :", error)
    );
}
