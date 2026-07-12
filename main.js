function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    const icon = document.querySelector('.theme-toggle .material-symbols-outlined');
    if (icon) icon.textContent = html.classList.contains('dark') ? 'light_mode' : 'dark_mode';
}
document.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    const themeIcon = document.querySelector('.theme-toggle .material-symbols-outlined');
    if (themeIcon) themeIcon.textContent = document.documentElement.classList.contains('dark') ? 'light_mode' : 'dark_mode';
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('mobile-menu-open');
            mobileMenu.classList.toggle('mobile-menu-closed');
            const icon = mobileToggle.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = mobileMenu.classList.contains('mobile-menu-open') ? 'close' : 'menu';
            }
        });
    }
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
        sectionObserver.observe(section);
    });
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        document.querySelectorAll('.input-group .floating-label-input').forEach(function(input) {
            input.addEventListener('input', function() {
                const ripple = this.parentElement.querySelector('.type-ripple');
                if (ripple) {
                    ripple.classList.remove('animate');
                    void ripple.offsetWidth;
                    ripple.classList.add('animate');
                }
            });
        });
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            if (!btn || btn.classList.contains('is-sending') || btn.classList.contains('is-success')) return;
            btn.classList.add('is-sending');
            btn.disabled = true;
            setTimeout(function() {
                btn.classList.remove('is-sending');
                btn.classList.add('is-success');
                setTimeout(function() {
                    btn.classList.remove('is-success');
                    btn.disabled = false;
                    contactForm.reset();
                    document.querySelectorAll('.input-group .floating-label-input').forEach(function(inp) {
                        inp.dispatchEvent(new Event('input', { bubbles: true }));
                    });
                    var overlay = document.getElementById('form-overlay');
                    if (overlay) {
                        overlay.classList.add('active');
                    }
                }, 3000);
            }, 2000);
        });
    }
    var overlayClose = document.getElementById('overlay-close');
    var overlay = document.getElementById('form-overlay');
    if (overlayClose && overlay) {
        overlayClose.addEventListener('click', function() {
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
    function animateCounter(el) {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals) || 0;
        const duration = 2000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el.textContent = current.toFixed(decimals);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));
    let lastScroll = 0;
    const nav = document.querySelector('.nav-header');
    if (nav) {
        window.addEventListener('scroll', () => {
            const current = window.scrollY;
            if (current > 80 && current > lastScroll) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
            lastScroll = current;
        });
    }
    function initCardStack() {
        const track = document.querySelector('.cards-stack-track');
        const cards = document.querySelectorAll('.cards-stack-card');
        if (!track || !cards.length) return;
        const total = cards.length;
        function animate() {
            const rect = track.getBoundingClientRect();
            const vh = window.innerHeight;
            const startY = vh * 0.4;
            const totalDist = rect.height + startY - vh;
            let progress = totalDist > 0 ? (startY - rect.top) / totalDist : 0;
            progress = Math.max(0, Math.min(1, progress));
            cards.forEach((card, i) => {
                const offset = 1;
                const s = (offset + i) / (total + offset + 1);
                const e = (offset + i + 1) / (total + offset + 1);
                let cp = (progress - s) / (e - s);
                cp = Math.max(0, Math.min(1, cp));
                const y = -180 * cp;
                const rotate = (-i + 90) * (1 - cp);
                const z = i * 10;
                card.style.transform = 'translateZ(' + z + 'px) translateY(' + y + '%) rotate(' + rotate + 'deg)';
            });
        }
        window.addEventListener('scroll', animate, { passive: true });
        animate();
    }
    initCardStack();
    document.querySelectorAll('.soft-lift').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(-5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});
