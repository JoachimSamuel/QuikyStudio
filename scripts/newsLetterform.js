document
  .getElementById("downloadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if all fields are filled
    if (
      document.getElementById("name").value &&
      document.getElementById("email").value
    ) {
      // Create a link element
      var link = document.createElement("a");
      link.href = "public/images/_3ee70bcb-63be-4588-8fe7-e7106902e275.jpeg"; // Replace with the path to your welcome file
      link.download = "test.jpeg"; // Filename suggestion for the user
      document.body.appendChild(link);
      link.click(); // Simulate a click on the link to trigger download
      document.body.removeChild(link); // Clean up
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
