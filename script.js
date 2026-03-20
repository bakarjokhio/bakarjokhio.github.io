const container = document.getElementById("cardsContainer");

apps.forEach(app => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = app.image || "https://via.placeholder.com/300x200?text=No+Preview";

  const title = document.createElement("div");
  title.className = "card-title";
  title.innerText = app.name;

  card.appendChild(img);
  card.appendChild(title);

  card.onclick = () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      window.open(app.link, "_blank");
      card.style.transform = "";
    }, 150);
  };

  container.appendChild(card);
});
