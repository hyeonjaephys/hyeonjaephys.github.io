// Site-specific Google Analytics events
// - tracks CV clicks from each placement
// - records a section once when its heading becomes visible

(() => {
  "use strict";

  const sendEvent = (eventName, parameters = {}) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, parameters);
  };

  const initializeAnalytics = () => {
    document.querySelectorAll('[data-analytics-event="cv_click"]').forEach((link) => {
      link.addEventListener("click", () => {
        sendEvent("cv_click", {
          link_location: link.dataset.analyticsLocation || "unknown"
        });
      });
    });

    const sectionHeadings = document.querySelectorAll("[data-analytics-section]");
    if (!sectionHeadings.length) return;

    if (!("IntersectionObserver" in window)) {
      sectionHeadings.forEach((heading) => {
        const bounds = heading.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          sendEvent("section_view", {
            section_name: heading.dataset.analyticsSection
          });
        }
      });
      return;
    }

    const viewedSections = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || viewedSections.has(entry.target)) return;

        viewedSections.add(entry.target);
        sendEvent("section_view", {
          section_name: entry.target.dataset.analyticsSection
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    sectionHeadings.forEach((heading) => observer.observe(heading));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAnalytics);
  } else {
    initializeAnalytics();
  }
})();
