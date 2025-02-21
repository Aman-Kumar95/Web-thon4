document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    });

    // Smooth animation for cards when they appear in the viewport
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.classList.add('hidden');
        cardObserver.observe(card);
    });

    // Smooth scroll for Explore button
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', () => {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Hover effect on cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.add('hovered');
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => c.classList.remove('hovered'));
        });
    });
});
