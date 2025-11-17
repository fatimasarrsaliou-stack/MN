/* ============ SCROLL REVEAL ANIMATIONS ============ */
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => observer.observe(el));


/* ============ PAGE TRANSITION ============ */

const transitionOverlay = document.getElementById('pageTransition');
const links = document.querySelectorAll('a[data-transition]');

function handleLinkClick(e) {
  const href = this.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  e.preventDefault();
  transitionOverlay.classList.add('active');

  setTimeout(() => {
    window.location.href = href;
  }, 450);
}

links.forEach(link => link.addEventListener('click', handleLinkClick));

/* When page loads, slide transition overlay up */
window.addEventListener('load', () => {
  setTimeout(() => {
    transitionOverlay.classList.remove('active');
  }, 60);
});


/* ============ SMOOTH SCROLL (OPTIONAL) ============ */
// Active le scroll doux partout
document.documentElement.style.scrollBehavior = "smooth";

