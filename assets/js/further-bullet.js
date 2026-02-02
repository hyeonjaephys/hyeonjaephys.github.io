document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".further-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".further-entry");
      if (!entry) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      entry.classList.toggle("open");
    });
  });
});
