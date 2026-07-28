document.addEventListener("DOMContentLoaded", () => {

    // Hero Section Fade In
    const hero = document.querySelector(".hero-content");

    if(hero){
        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";

        setTimeout(() => {
            hero.style.transition = "1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }

    // Button Bounce Effect
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });

    // Product Cards Pop Animation
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) rotate(2deg)";
            card.style.transition = ".4s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) rotate(0)";
        });
    });

    // Welcome Message
    setTimeout(() => {
        alert("🎉 Welcome to Kids World! Have Fun Shopping! 🧸");
    }, 1000);

    // Floating Emojis
    const emojis = ["🎈","🧸","🚀","🎁","🌈","⭐"];

    setInterval(() => {
        const emoji = document.createElement("div");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.bottom = "-50px";
        emoji.style.fontSize = "30px";
        emoji.style.zIndex = "9999";
        emoji.style.pointerEvents = "none";

        document.body.appendChild(emoji);

        let position = -50;

        const float = setInterval(() => {
            position += 5;
            emoji.style.bottom = position + "px";

            if(position > window.innerHeight + 50){
                clearInterval(float);
                emoji.remove();
            }
        }, 30);

    }, 2500);

});