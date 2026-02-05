document.addEventListener("DOMContentLoaded", () => {
  function forceOpen(entry, toggleSelector) {
    if (!entry) return;

    if (entry.classList.contains("open")) {
      const btn0 = entry.querySelector(toggleSelector);
      if (btn0) btn0.setAttribute("aria-expanded", "true");
      return;
    }

    const btn = entry.querySelector(toggleSelector);
    if (btn) btn.setAttribute("aria-expanded", "true");
    entry.classList.add("open");
  }

  function openTogglesInResearchItem(item) {
    if (!item) return;

    // Abstract
    forceOpen(item.querySelector(".abstract-entry"), ".abstract-toggle");

    // Further information / Resources
    item.querySelectorAll(".further-entry").forEach((entry) => {
      forceOpen(entry, ".further-toggle");
    });

    // Related
    item.querySelectorAll(".related-entry").forEach((entry) => {
      forceOpen(entry, ".related-toggle");
    });
  }

  function openAllForHash() {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;

    const item = target.closest(".research-item");
    if (item) openTogglesInResearchItem(item);

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  openAllForHash();
  window.addEventListener("hashchange", openAllForHash);
});
