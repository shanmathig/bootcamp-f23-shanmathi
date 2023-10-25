const aboutUs = document.getElementById("aboutUs"); // Corrected the ID here
aboutUs.style.color = "red";

const navbar = document.getElementById("nav-bar");

navbar.addEventListener("click", (event) => {
    if (event.target == navbar) {
        const colors = ["red", "blue", "green"];
        navbar.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
    }
});
