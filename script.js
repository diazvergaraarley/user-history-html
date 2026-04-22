

/* window.onload = function() {
    alert("Welcome to my portfolio 👋");
}; */

function changeText() {
    document.getElementById("demo-text").textContent = "Text changed!";
}

function toggleInfo() {
    let info = document.getElementById("extra-info");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}
const links = document.querySelectorAll("#nav-menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("active");
    });
});

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {

        // quitar active de todos
        navLinks.forEach(l => l.classList.remove("active-link"));

        // agregar al clickeado
        this.classList.add("active-link");
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {

            // highlight del link (lo que ya hiciste)
            navLinks.forEach(l => l.classList.remove("active-link"));
            this.classList.add("active-link");

            // 🔥 NUEVO: highlight de sección
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                const section = document.querySelector(targetId);

                if (section) {
                    section.classList.add("section-highlight");

                    setTimeout(() => {
                        section.classList.remove("section-highlight");
                    }, 2000);
                }
            }
        });
    });

});