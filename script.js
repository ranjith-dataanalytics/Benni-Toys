// Benni Toys - Front Page
// The other pages will be added later.

document.getElementById("year").textContent = new Date().getFullYear();

// Small tap feedback for the menu cards.
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.opacity = "0.88";
    setTimeout(() => {
      item.style.opacity = "";
    }, 140);
  });
});
