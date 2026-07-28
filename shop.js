document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".collection-card");

    cards.forEach(card => {

        // Desktop Hover
        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.03)";
            card.style.transition = "0.4s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

        // Mobile Touch Effect
        card.addEventListener("touchstart", () => {

            card.style.transform = "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("touchend", () => {

            setTimeout(() => {
                card.style.transform = "translateY(0) scale(1)";
            }, 300);

        });

        // Sparkle Effect
        card.addEventListener("click", (e) => {

            for(let i = 0; i < 10; i++){

                const sparkle = document.createElement("span");

                sparkle.innerHTML = "✨";

                sparkle.style.position = "fixed";
                sparkle.style.left = e.clientX + "px";
                sparkle.style.top = e.clientY + "px";
                sparkle.style.fontSize = "22px";
                sparkle.style.pointerEvents = "none";
                sparkle.style.zIndex = "9999";

                document.body.appendChild(sparkle);

                const x = (Math.random() - 0.5) * 200;
                const y = (Math.random() - 0.5) * 200;

                sparkle.animate([
                    {
                        transform: "translate(0,0) scale(1)",
                        opacity: 1
                    },
                    {
                        transform: `translate(${x}px, ${y}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: 900,
                    easing: "ease-out"
                });

                setTimeout(() => {
                    sparkle.remove();
                }, 900);

            }

        });

    });

    // Page Load Animation

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});