const searchInput = document.getElementById("site-search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(text)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
