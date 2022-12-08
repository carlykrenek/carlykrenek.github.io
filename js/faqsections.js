let containers = document.querySelectorAll('.faq-container')

containers.forEach((container) => {
    container.addEventListener("click", () => {
        container.classList.toggle('active');
    });
});