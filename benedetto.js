document.addEventListener('DOMContentLoaded', () => {
    // Fade in animation for dishes on scroll
    const dishes = document.querySelectorAll('.dish');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    dishes.forEach(dish => {
        dish.style.opacity = '0';
        dish.style.transform = 'translateY(20px)';
        dish.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(dish);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
