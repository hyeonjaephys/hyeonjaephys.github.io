// News toggle (accordion)
// - toggles .open on .news-entry
// - keeps aria-expanded in sync

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".news-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".news-entry");
      if (!entry) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      entry.classList.toggle("open");
    });
  });
});
