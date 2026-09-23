document.addEventListener("DOMContentLoaded", () => {

    /* ================= SCROLL ANIMATIONS ================= */

    const elements = document.querySelectorAll(
        ".reassurance-item, " +
        ".course-card, " +
        ".tip-card, " +
        ".learning-card, " +
        ".roadmap-item, " +
        ".support-box, " +
        ".update-box, " +
        ".certificate-box, " +
        ".income-box, " +
        ".faq-list details, " +
        ".cta-box"
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
                    entry.target.style.transform = "translateY(0)";
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


    /* ================= NAVBAR ================= */

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


    /* ================= FAQ ================= */

    const faqItems =
        document.querySelectorAll(".faq-list details");

    faqItems.forEach((detail) => {

        detail.addEventListener("toggle", () => {

            const symbol =
                detail.querySelector("summary span");

            if (detail.open) {

                /* بستن بقیه سوال‌ها */

                faqItems.forEach((other) => {

                    if (other !== detail) {

                        other.removeAttribute("open");

                        const otherSymbol =
                            other.querySelector("summary span");

                        if (otherSymbol) {
                            otherSymbol.textContent = "+";
                        }

                    }

                });

                /* سوال باز */

                if (symbol) {
                    symbol.textContent = "−";
                }

            } else {

                /* سوال بسته */

                if (symbol) {
                    symbol.textContent = "+";
                }

            }

        });

    });

});