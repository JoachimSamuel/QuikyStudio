const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      accordionItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
  });
});
