

// ACCORDION
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      
      document.querySelectorAll(".accordion-content").forEach(item => {
        if (item !== content) {
          item.classList.remove("open");
          item.previousElementSibling.classList.remove("active");
        }
      });

      
      header.classList.toggle("active");
      content.classList.toggle("open");
    });
  });

 window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  //  Slide screenshots out
  tl.to(".screenshot.desktop", {
    y: "-110%",
    opacity: 0,
    duration: 2,
  })
  .to(
    ".screenshot.mobile",
    {
      y: "110%",
      opacity: 0,
      duration: 2,
    },
    "<"
  )

  // Fade out intro background
  .to(".intro-animation", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".intro-animation").style.display = "none";
    },
  })

  // 3Circle expansion
  .to(".circle-bg", {
    scale: 12,
    opacity: 1,
    duration: 0.02,
    ease: "power2.out",
  }, "-=0.2")

  // Hero image appears through circle
  .from(".hero img", {
    scale: 0.4,
    opacity: 0.5,
    duration: 1,
    ease: "power2.out",
  }, "-=0.1")

  // Fade in full site, nav and hero content
  .to("body > *:not(.intro-animation):not(.circle-transition)", {
    opacity: 1,
    duration: 0.8,
  }, "-=1")
  .from(".nav", { y: -40, opacity: 0, duration: 2 }, "-=0.6")
  .from(".hero h1", { y: 40, opacity: 0, duration: 2 }, "-=0.8")
  .from(".hero p", { y: 40, opacity: 0, duration: 2 }, "-=0.8")
  .from(".blob-1, .blob-2, .h1-blob", { scale: 1, opacity: 0, duration: 1 }, "-=0.8")

  // Fade out the circle at the end
  .to(".circle-bg", {
    opacity: 0,
    duration: 0.8,
  });
});



gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  
  let mm = gsap.matchMedia();

  mm.add("(min-width: 400px)", () => { 
    // All animations run on screens gratet than or equal to 1000px

    // FEATURES SECTION
    const featurestl = gsap.timeline({
      scrollTrigger:{
        trigger:".features",
        start: "top 70%",
        end: "top 20%",
        toggleActions:"play none none reverse"
      }
    });
    featurestl
      .from(".section-heading",{ opacity:0, duration:1, scale:0.2 })
      .from(".big-text",{ opacity:0, scale:0.3, duration:2 })
      .from(".features video", { scale: 0.4, opacity: 0, duration: 1 }, "-=0.5")
      .from(".video-details", { x: -500, opacity: 0, duration: 1 }, "-=0.5")
      .from(".features .download-section", { x: 500, opacity: 0, duration:1 },"-=0.5");

    // ======================
    // SERVICE SECTION
    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-section",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        // scrub: 2
      }
    });
    serviceTl.from(".service-left", { x: -500, opacity: 0, duration: 1.5, ease: "power2.out" })
      .from(".service-right", { x: 500, opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" }, "-=0.5");

    // ======================
    // BENEFITS SECTION
    const benefitsTl = gsap.timeline({
      scrollTrigger: { trigger: ".benefits", start: "top 80%", end:"top 20%", toggleActions: "play none none reverse" }
    });
    benefitsTl.from(".benefits-heading", { y:-50, opacity:0, duration:1, ease:"power2.out" })
      .from(".benefits-h2", { y:50, opacity:0, duration:1, ease:"power2.out" })
      .from(".benefits-center", { scale:0.4, opacity:0, duration:1, ease:"power2.out" })
      .from(".yellow-ring", { rotation:360, scale:0, opacity:0, duration:1, stagger:0.2, ease:"power2.out" }, "-=0.8");

    // ======================
    // TESTIMONIALS SECTION
    const testimonialsTl = gsap.timeline({
      scrollTrigger: { trigger: ".testimonials", start: "top 80%", toggleActions:"play none none reverse", scrub:false }
    });
    testimonialsTl.from(".testimonials .section-heading", { y:-50, opacity:0, duration:0.8, ease:"power2.out" })
      .from(".testimonials .testimonial-p", { y:50, opacity:0, duration:1, ease:"power2.out" }, "-=0.5")
      .from(".testimonials .test-details", { x:-100, opacity:0, duration:1, stagger:0.3, ease:"power2.out" }, "-=0.6")
      .from(".testimonials .arrows ion-icon", { scale:0, opacity:0, duration:0.8, stagger:0.2, ease:"back.out(1.7)" }, "-=0.5");

    // ======================
    // FAQ SECTION
    const faqTl = gsap.timeline({
      scrollTrigger: { trigger: ".faq-section", start:"top 80%", toggleActions:"play none none reverse" }
    });
    faqTl.from(".faq-left h2", { y:-50, opacity:0, duration:1, ease:"power2.out" })
      .from(".faq-left p", { y:50, opacity:0, duration:1, stagger:0.2, ease:"power2.out" }, "-=0.5")
      .from(".accordion-item", { x:-50, opacity:0, duration:0.8, stagger:0.3, ease:"power2.out" }, "-=0.5");

    // ======================
    // CTA SECTION
    const ctaTl = gsap.timeline({
      scrollTrigger: { trigger: ".cta-section", start:"top 80%", end:"top 20%", toggleActions:"play none none reverse", scrub:false }
    });
    ctaTl.from(".cta-left h2", { y:-50, opacity:0, duration:1, ease:"power2.out" })
      .from(".cta-left p", { y:50, opacity:0, duration:1, ease:"power2.out" }, "-=0.5")
      .from(".cta-download, .cta-arrow", { scale:0.5, opacity:0, duration:0.8, stagger:0.2, ease:"back.out(1.7)" }, "-=0.5")
      .from(".cta-right img", { scale:0.8, opacity:0, duration:1, stagger:0.3, ease:"power2.out" }, "-=0.5");

    // ======================
    // FOOTER SECTION
    const footerTl = gsap.timeline({
      scrollTrigger: { trigger: ".footer", start:"top 80%", toggleActions:"play none none reverse" }
    });
    footerTl.from(".first-row h2", { y:-30, opacity:0, duration:1, ease:"power2.out" })
      .from(".first-row .links > div", { y:30, opacity:0, duration:1, stagger:0.2, ease:"power2.out" }, "-=0.5")
      .from(".second-row .applications, .second-row .icons", { y:50, opacity:0, duration:1, stagger:0.2, ease:"power2.out" }, "-=0.5")
      .from(".third-row p, .third-row-links a", { y:30, opacity:0, duration:1, stagger:0.2, ease:"power2.out" }, "-=0.5");

  }); 
});
