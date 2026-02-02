document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".related-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".related-entry");
      if (!entry) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      entry.classList.toggle("open");
    });
  });
});
