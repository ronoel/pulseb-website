import './style.scss';

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("active");
        this.classList.toggle("hidden");
    });
});