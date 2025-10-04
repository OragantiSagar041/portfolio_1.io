// ===== Mobile nav toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// ===== Theme toggle =====
const themeBtn = document.getElementById('theme-toggle');
const applyTheme = t => document.documentElement.setAttribute('data-theme', t);
const saved = localStorage.getItem('theme');
if(saved) applyTheme(saved);
if(themeBtn){
  themeBtn.addEventListener('click', () => {
    const next = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
    themeBtn.textContent = next==='light'?'🌙':'🌞';
  });
}

// ===== Footer year =====
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();

// ===== Scroll to top button =====
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if(window.scrollY>200) scrollBtn.style.display="block";
  else scrollBtn.style.display="none";

  // Hero scroll effect
  const hero = document.querySelector('.hero');
  if(window.scrollY>50) hero.classList.add('scroll-up');
  else hero.classList.remove('scroll-up');
});
scrollBtn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
