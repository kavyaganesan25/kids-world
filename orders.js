// Truck, Stars & Order Tracking

const truck = document.getElementById("truck");
const stars = document.querySelectorAll(".star");
const status = document.getElementById("status");
const reward = document.getElementById("reward");
const steps = document.querySelectorAll(".step");

const messages = [
    "📦 Order Placed",
    "🧸 Toy Packed",
    "🚚 Shipped Successfully",
    "📍 Out For Delivery",
    "🎉 Delivered Successfully!"
];

// Create shine animation using JS
const style = document.createElement("style");
style.innerHTML = `
@keyframes starShine {
    0%{
        transform:scale(1);
        filter:drop-shadow(0 0 5px gold);
    }
    50%{
        transform:scale(1.2);
        filter:
        drop-shadow(0 0 15px #FFD700)
        drop-shadow(0 0 30px #FFEB3B)
        drop-shadow(0 0 45px #FFF176)
        drop-shadow(0 0 65px white);
    }
    100%{
        transform:scale(1);
        filter:drop-shadow(0 0 8px gold);
    }
}
`;
document.head.appendChild(style);

stars.forEach((star, index) => {
    star.addEventListener("click", function () {

        // Activate stars with glow
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("active");
            stars[i].style.animation = `starShine 0.8s ease-in-out ${i * 0.15}s infinite`;
        }

        // Remove remaining stars glow
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove("active");
            stars[i].style.animation = "none";
        }

        // Truck movement
        const percent = (index / (stars.length - 1)) * 88;
        truck.style.left = percent + "%";

        // Status
        status.innerHTML = messages[index];

        // Steps
        steps.forEach((step, i) => {
            if (i <= index) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });

        // Reward
        if (index === stars.length - 1) {
            reward.style.display = "block";
            reward.innerHTML =
                "🎉 Your Toy Has Arrived! 🧸<br><br>🎁 Surprise Gift Unlocked!";
        } else {
            reward.style.display = "none";
        }
    });
});