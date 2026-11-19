if (navigator.clipboard?.writeText) {
  document.querySelectorAll(".bibtex-panel").forEach((panel) => {
    const citation = panel.querySelector("code");
    const button = panel.querySelector(".bibtex-copy");
    const status = panel.querySelector(".bibtex-copy-status");

    button.hidden = false;
    button.addEventListener("click", async () => {
      status.textContent = "";
      try {
        await navigator.clipboard.writeText(citation.textContent);
        status.textContent = "Copied";
      } catch {
        status.textContent = "Select and copy the citation manually.";
      }
    });
  });
}
