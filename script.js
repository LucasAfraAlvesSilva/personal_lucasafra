
document.getElementById("contactForm").onsubmit = function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
};


function mask(input, mask) {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '').replace(mask, '$1-$2');
    });
}
const phoneInput = document.getElementById("phone");
mask(phoneInput, /(\d{2})(\d{5})(\d{4})/);


document.getElementById("hamburger").onclick = function() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "none" ? "block" : "none";
};


let currentSlide = 0;
document.getElementById("nextSlide").onclick = function() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
};

// Janelas Modais
document.getElementById("openModal").onclick = function() {
    document.getElementById("modal").style.display = "block";
};
document.getElementById("closeModal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

// Trocar Tema
let darkMode = false;
document.getElementById("themeToggle").onclick = function() {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
};
