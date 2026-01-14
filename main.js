import '../styles/main.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
// lenis.on('scroll', ScrollTrigger.update); // Optional: usually needed if syncing strictly
// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);

// Hero Animations
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

heroTl
    .to('.hero__title', { opacity: 1, y: 0, duration: 1.2, delay: 0.2 })
    .to('.hero__subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
    .to('.hero__actions', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .fromTo('.hero__bg', { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }, 0);


// Services Animations
gsap.from('.services__header', {
    scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.utils.toArray('.services__card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1 // Stagger effect based on index if in same view, but since they are individual triggers, delay might be minimal or used if we trigger parent.
        // Actually, distinct triggers for each card is better for responsive.
        // Let's use batch? Or just simple trigger. Simple trigger per card is fine.
    });
});

console.log('App Initialized: Institutional Capital Advisory');

// Why Us Animations
gsap.from('.why-us .col-4', {
    scrollTrigger: {
        trigger: '.why-us',
        start: 'top 75%',
    },
    x: -50,
    opacity: 0,
    duration: 1
});

gsap.from('.benefit-item', {
    scrollTrigger: {
        trigger: '.why-us',
        start: 'top 75%',
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Process Animations
gsap.from('.process__step', {
    scrollTrigger: {
        trigger: '.process',
        start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
});

// Clients & Testimonials Animations
gsap.from('.clients__tag', {
    scrollTrigger: {
        trigger: '.clients',
        start: 'top 85%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    stagger: 0.05
});

gsap.from('.testimonials__card', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// About Animations
gsap.from('.about__content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
    x: -50,
    opacity: 0,
    duration: 1
});

gsap.from('.about__visual', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

gsap.from('.cta-section', {
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
    },
    scale: 0.95,
    opacity: 0,
    duration: 1
});





