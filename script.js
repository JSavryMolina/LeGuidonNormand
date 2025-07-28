// ✅ Animation d'apparition au scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("invisible");
  observer.observe(section);
});

// ✅ Message d'accueil avec clin d'œil vélo
window.addEventListener("load", () => {
  alert("Bienvenue sur la route de l’Avenue Verte 🚴‍♀️! Prêt à pédaler ?");
});

// ✅ Animation bouton au survol
const btn = document.querySelector("button");
btn.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.1)";
  btn.style.transition = "0.3s ease";
});
btn.addEventListener("mouseout", () => {
  btn.style.transform = "scale(1)";
});

// ✅ Bonus : vélo qui suit la souris (clin d'œil fun)
const bikeEmoji = document.createElement("div");
bikeEmoji.textContent = "🚴";
bikeEmoji.style.position = "fixed";
bikeEmoji.style.fontSize = "1.5rem";
bikeEmoji.style.pointerEvents = "none";
bikeEmoji.style.transition = "transform 0.1s ease";
document.body.appendChild(bikeEmoji);

document.addEventListener("mousemove", e => {
  bikeEmoji.style.left = e.pageX + 10 + "px";
  bikeEmoji.style.top = e.pageY + 10 + "px";
});
