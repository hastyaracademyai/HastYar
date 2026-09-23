document.addEventListener("DOMContentLoaded", () => {

    /* ================= SCROLL ANIMATION ================= */

    const elements = document.querySelectorAll(
        ".chapter-card, .intro-box, .path-item, .support-box, .final-project-box, .cta-box"
    );

    elements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elements.forEach((element) => {

        observer.observe(element);

    });



    /* ================= NAVBAR SCROLL EFFECT ================= */

    const navbar = document.querySelector(".navbar");


    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {

                navbar.style.background =
                    "rgba(5, 5, 5, 0.92)";

                navbar.style.backdropFilter =
                    "blur(18px)";

            } else {

                navbar.style.background = "";

                navbar.style.backdropFilter = "";

            }

        });

    }



    /* ================= CHAPTER OPEN EFFECT ================= */

    const chapterCards =
        document.querySelectorAll(".chapter-card");


    chapterCards.forEach((card) => {

        const header =
            card.querySelector(".chapter-header");

        const content =
            card.querySelector(".chapter-content");


        if (!header || !content) {
            return;
        }


        header.style.cursor = "pointer";


        header.addEventListener("click", () => {

            const isOpen =
                card.classList.contains("active");


            chapterCards.forEach((otherCard) => {

                otherCard.classList.remove("active");

            });


            if (!isOpen) {

                card.classList.add("active");

            }

        });

    });



    /* ================= BACK TO TOP ================= */

    const logo =
        document.querySelector(".logo");


    if (logo) {

        logo.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});