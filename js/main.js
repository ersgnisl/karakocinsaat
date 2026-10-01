const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.addEventListener("click", (event) => {
  if (!nav || !menuToggle || !nav.classList.contains("is-open")) return;
  if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
