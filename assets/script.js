// Minimalist animation for fade-in
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-fadein').forEach((el, i) => {
        el.style.animationDelay = (0.8 + i * 0.2) + 's';
    });
});
