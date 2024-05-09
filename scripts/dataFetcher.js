// Récupération des données des JSON

// Charger les données depuis clients.json et projects.json en parallèle
const dataPromise = Promise.all([
  fetch("./data/clients.json").then((response) => response.json()),
  fetch("./data/projects.json").then((response) => response.json()),
])
  .then(([clientsData, projectsData]) => {
    console.log("Données projets :", projectsData);
    return { clientsData, projectsData }; // Retourner les données
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des données :", error);
    throw error; // Lancer l'erreur pour la traiter à l'extérieur si nécessaire
  });

export default dataPromise;
