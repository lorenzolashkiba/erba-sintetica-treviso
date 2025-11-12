// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Chiudi menu mobile se aperto
            const nav = document.querySelector('.nav-links');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                document.querySelector('.burger').classList.remove('toggle');
            }
        }
    });
});

// ===== MOBILE NAVIGATION =====
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// ===== STICKY HEADER CON SHADOW ON SCROLL =====
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// ===== ANIMAZIONE SCROLL REVEAL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Osserva tutti gli elementi con classe fade-in
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== GALLERY LIGHTBOX =====
const galleryImages = document.querySelectorAll('.gallery-grid img');
const body = document.body;

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // Crea lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
                <p class="lightbox-caption">${img.alt}</p>
            </div>
        `;

        body.appendChild(lightbox);
        body.style.overflow = 'hidden';

        // Chiudi lightbox
        const closeLightbox = () => {
            lightbox.remove();
            body.style.overflow = 'auto';
        };

        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Chiudi con ESC
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});

// ===== FORM VALIDATION E SUBMIT CON WEB3FORMS =====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Validazione base
        if (!name || !email || !message) {
            showNotification('Per favore compila tutti i campi obbligatori', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Inserisci un indirizzo email valido', 'error');
            return;
        }

        // Mostra stato di caricamento
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        submitButton.textContent = 'Invio in corso...';

        try {
            // Invia il form a Web3Forms
            const formData = new FormData(contactForm);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showNotification('Messaggio inviato con successo! Ti contatteremo presto.', 'success');
                contactForm.reset();
            } else {
                showNotification('Errore nell\'invio. Riprova più tardi.', 'error');
            }
        } catch (error) {
            showNotification('Errore di connessione. Verifica la tua connessione internet.', 'error');
        } finally {
            // Ripristina il pulsante
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            submitButton.textContent = 'Invia Richiesta';
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('notification-show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('notification-show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== BACK TO TOP BUTTON =====
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.setAttribute('aria-label', 'Torna su');
body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== COUNTER ANIMATION PER NUMERI =====
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// ===== CATALOGO CARD TILT EFFECT (opzionale) =====
const catalogCards = document.querySelectorAll('.catalogo-card');
catalogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease';
    });
});

// ===== CAROUSEL PRODOTTI E REALIZZAZIONI =====
const carouselInit = () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const indicators = document.querySelectorAll('.indicator');

    if (!slides.length) return;

    let currentSlide = 0;
    let autoPlayInterval;
    let isUserInteracting = false;

    // Funzione per mostrare una slide specifica
    const showSlide = (index) => {
        // Rimuovi classe active da tutte le slide
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // Gestisci loop
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Mostra slide corrente
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    };

    // Funzione per slide successiva
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    // Funzione per slide precedente
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    // Auto-play ogni 3 secondi
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            if (!isUserInteracting) {
                nextSlide();
            }
        }, 3000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    const resetAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
    };

    // Event listeners per pulsanti
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            isUserInteracting = true;
            prevSlide();
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            isUserInteracting = true;
            nextSlide();
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        });
    }

    // Event listeners per indicatori
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            isUserInteracting = true;
            showSlide(index);
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        });
    });

    // Pausa auto-play quando mouse è sopra il carousel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            isUserInteracting = true;
        });

        carouselContainer.addEventListener('mouseleave', () => {
            isUserInteracting = false;
        });
    }

    // Supporto per touch/swipe su mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            isUserInteracting = true;
        });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        });
    }

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - prev slide
                prevSlide();
            }
        }
    };

    // Supporto tastiera (frecce)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            isUserInteracting = true;
            prevSlide();
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        } else if (e.key === 'ArrowRight') {
            isUserInteracting = true;
            nextSlide();
            resetAutoPlay();
            setTimeout(() => { isUserInteracting = false; }, 100);
        }
    });

    // Inizializza
    showSlide(0);
    startAutoPlay();
};

// Inizializza il carousel quando il DOM è pronto
carouselInit();

// ===== CALCOLATORE RISPARMIO ANIMATO =====
const savingsCalculator = () => {
    const slider = document.getElementById('garden-size');
    const sizeDisplay = document.getElementById('size-value');
    const waterSaved = document.getElementById('water-saved');
    const timeSaved = document.getElementById('time-saved');
    const moneySaved = document.getElementById('money-saved');
    const totalSavings = document.getElementById('total-savings');

    // Funzione per animare i numeri (contatore incrementale)
    function animateValue(element, start, end, duration) {
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);

            // Formatta il numero con separatore migliaia
            element.textContent = current.toLocaleString('it-IT');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Funzione per calcolare i risparmi
    function calculateSavings(squareMeters) {
        // Calcoli basati su dati realistici
        const waterPerYear = squareMeters * 150; // 150 litri/mq/anno
        const hoursPerYear = Math.round(squareMeters * 1.5); // 1.5 ore/mq/anno (taglio + manutenzione)
        const costsPerYear = Math.round(squareMeters * 8); // €8/mq/anno (acqua + taglio + concime + fertilizzante)
        const total10Years = costsPerYear * 10;

        return {
            water: waterPerYear,
            hours: hoursPerYear,
            money: costsPerYear,
            total: total10Years
        };
    }

    // Handler per il cambiamento dello slider
    function handleSliderChange() {
        const mq = parseInt(slider.value);
        sizeDisplay.textContent = mq;

        const savings = calculateSavings(mq);

        // Anima tutti i valori
        animateValue(waterSaved, 0, savings.water, 1000);
        animateValue(timeSaved, 0, savings.hours, 1000);
        animateValue(moneySaved, 0, savings.money, 1200);
        animateValue(totalSavings, 0, savings.total, 1500);

        // Aggiungi effetto "pop" alle card
        document.querySelectorAll('.saving-card').forEach((card, index) => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = `cardPop 0.5s ease ${index * 0.1}s`;
            }, 10);
        });

        // Effetto glow sulla box totale
        const totalBox = document.querySelector('.total-savings-box');
        totalBox.style.animation = 'none';
        setTimeout(() => {
            totalBox.style.animation = 'glowPulse 1.5s ease 0.3s';
        }, 10);
    }

    // Event listener per lo slider
    if (slider) {
        slider.addEventListener('input', handleSliderChange);

        // Inizializza con valore di default
        handleSliderChange();
    }
};

// Inizializza il calcolatore quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', savingsCalculator);
} else {
    savingsCalculator();
}
