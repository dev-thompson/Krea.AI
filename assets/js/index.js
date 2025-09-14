
  // Initialize Swiper
  var swiper = new Swiper(".backgroundSwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        // Remove animations from all slides
        document.querySelectorAll(".swiper-slide [data-aos]").forEach(el => {
          el.classList.remove("aos-animate");
        });

        // Re-apply animations on active slide
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.querySelectorAll("[data-aos]").forEach(el => {
          setTimeout(() => {
            el.classList.add("aos-animate");
          }, 50); // small delay ensures restart
        });
      }
    }
  });


