document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Scroll Animation (Fade in)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
    });

    // Lightbox Functionality
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close-modal');
    const whatsappBtn = document.getElementById('modal-whatsapp');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (modal && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h4').innerText;
                
                modalImg.src = img.src;
                modalTitle.innerText = title;
                
                // Set WhatsApp message
                const pageName = document.title.split('-')[0].trim();
                const message = `Hi! I'm interested in the ${title} from the ${pageName} collection.`;
                whatsappBtn.href = `https://wa.me/917875554847?text=${encodeURIComponent(message)}`;
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Home category popup
    const homeModal = document.getElementById('home-category-modal');
    const homeModalImg = document.getElementById('home-modal-img');
    const homeModalTitle = document.getElementById('home-modal-title');
    const homeModalSubtitle = document.getElementById('home-modal-subtitle');
    const homeModalDescription = document.getElementById('home-modal-description');
    const homeModalLink = document.getElementById('home-modal-link');
    const homeCloseBtn = document.getElementById('home-close-modal');
    const homeCategoryCards = document.querySelectorAll('.home-category-card');

    if (homeModal && homeCategoryCards.length > 0) {
        homeCategoryCards.forEach(card => {
            card.addEventListener('click', (event) => {
                event.preventDefault();

                const img = card.querySelector('img');
                homeModalImg.src = img.src;
                homeModalTitle.innerText = card.dataset.title || '';
                homeModalSubtitle.innerText = card.dataset.subtitle || '';
                homeModalDescription.innerText = card.dataset.description || '';
                homeModalLink.innerText = card.dataset.cta || 'Explore';
                homeModalLink.href = card.href;

                homeModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });

        homeCloseBtn.addEventListener('click', () => {
            homeModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (event) => {
            if (event.target === homeModal) {
                homeModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }
});
