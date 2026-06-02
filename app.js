// =========================
// Jasmin Brooks Portfolio
// Interactive polish
// =========================

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));


// Image modal for email previews
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const emailTiles = document.querySelectorAll(".email-tile");
const closeButtons = document.querySelectorAll("[data-close]");

emailTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    modalImg.src = tile.dataset.full;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  document.body.style.overflow = "";
}

closeButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});


// Soft custom cursor on desktop
const cursor = document.querySelector(".cursor-dot");

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursor.animate({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    }, {
      duration: 300,
      fill: "forwards"
    });
  });
}


// Tilt cards
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});


// Magnetic buttons
const magneticItems = document.querySelectorAll(".magnetic");

magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.13}px, ${y * 0.18}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "";
  });
});
