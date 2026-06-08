// ─── GSAP Plugin ───────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ─── Accordion ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content) {
          item.classList.remove("open");
          item.previousElementSibling.classList.remove("active");
        }
      });

      header.classList.toggle("active");
      content.classList.toggle("open");
    });
  });
});

// ─── Mobile Menu ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".middle-section");

  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("mobile-open");
    });
  }
});

// ─── MAIN ANIMATIONS ───────────────────────────────────────────
window.addEventListener("load", () => {
  const isMobile = window.innerWidth < 768;

  // ─────────────────────────────────────────
  // MOBILE (FAST ONLY)
  // ─────────────────────────────────────────
  if (isMobile) {
    gsap.from(".nav", { opacity: 0, y: -20, duration: 0.4 });
    gsap.from(".hero-text h1", { opacity: 0, y: 20, duration: 0.5 });
    gsap.from(".hero-text p", { opacity: 0, y: 15, duration: 0.4 });
    gsap.from(".hero-img-wrapper img", {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
    });

    gsap.from(".hero-cta, .stats .stat", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      stagger: 0.1,
    });

    return;
  }

  // ─────────────────────────────────────────
  // DESKTOP INTRO ANIMATION
  // ─────────────────────────────────────────
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(".nav", { y: -30, opacity: 0, duration: 0.6 })
    .from(".hero-text h1", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
    .from(".hero-text p", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
    .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.3")
    .from(
      ".stats .stat",
      { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
      "-=0.3",
    )
    .from(
      ".hero-img-wrapper img",
      { scale: 0.8, opacity: 0, duration: 0.8 },
      "-=0.5",
    )
    .from(
      [".hero-pill", ".hero-blob-orders", ".hero-blob-app"],
      { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 },
      "-=0.5",
    );

  // ─────────────────────────────────────────
  // SCROLL ANIMATIONS (DESKTOP ONLY)
  // ─────────────────────────────────────────

  const scrollDefaults = (trigger, start = "top 80%") => ({
    scrollTrigger: {
      trigger,
      start,
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap
    .timeline(scrollDefaults(".features", "top 70%"))
    .from(".section-heading", { opacity: 0, scale: 0.2, duration: 0.8 })
    .from(".big-text", { opacity: 0, scale: 0.3, duration: 0.8 })
    .from(
      ".features video",
      { scale: 0.4, opacity: 0, duration: 0.8 },
      "-=0.5",
    );

  gsap
    .timeline(scrollDefaults(".service-section"))
    .from(".service-left", { x: -200, opacity: 0, duration: 0.8 })
    .from(".service-right", { x: 200, opacity: 0, duration: 0.8 }, "-=0.5");

  gsap
    .timeline(scrollDefaults(".benefits"))
    .from(".benefits-heading", { y: -40, opacity: 0 })
    .from(".benefits-h2", { y: 40, opacity: 0 });
});
