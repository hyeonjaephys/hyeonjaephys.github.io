document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".abstract-entry");
      if (!entry) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      entry.classList.toggle("open");
    });
  });
});
