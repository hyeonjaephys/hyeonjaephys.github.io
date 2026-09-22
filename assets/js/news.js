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

      if (!expanded && typeof window.gtag === "function") {
        const title = entry.querySelector(".news-title")?.textContent.trim() || "unknown";
        const date = entry.querySelector(".news-date")?.textContent.trim() || "unknown";
        window.gtag("event", "news_expand", {
          news_title: title,
          news_date: date
        });
      }
    });
  });
});
