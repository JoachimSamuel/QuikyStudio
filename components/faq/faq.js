const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((i) => i.classList.remove("active"));
    item.classList.toggle("active");
  });
});
