$(document).ready(function(){
  $(window).on('scroll', function(){
    if ($(window).scrollTop()) {
      $("header").addClass('bgc');
    } else {
      $("header").removeClass('bgc');
    }
  });
});

// Scroll progress indicator
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (scrollProgress) {
    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.addEventListener("click", () => { document.documentElement.scrollTop = 0; });
    scrollProgress.style.background = `conic-gradient(var(--accent) ${scrollValue}%, var(--surface) ${scrollValue}%)`;
  }
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Team switch tabs
const teamBtn = document.getElementById('team-btn');
const advBtn  = document.getElementById('adv-btn');
const teamSec = document.getElementById('teem');
const advSec  = document.getElementById('advs');

if (teamBtn && advBtn) {
  teamBtn.addEventListener('click', () => {
    teamSec.style.display = 'block';
    advSec.style.display  = 'none';
    teamBtn.classList.add('tee');     teamBtn.classList.remove('add');
    advBtn.classList.add('add');      advBtn.classList.remove('tee');
    teamBtn.style.opacity = '1';      advBtn.style.opacity = '.55';
    teamBtn.style.transform = 'scale(1.06)';
    advBtn.style.transform  = 'scale(1)';
  });
  advBtn.addEventListener('click', () => {
    teamSec.style.display = 'none';
    advSec.style.display  = 'block';
    advBtn.classList.add('tee');      advBtn.classList.remove('add');
    teamBtn.classList.add('add');     teamBtn.classList.remove('tee');
    advBtn.style.opacity  = '1';      teamBtn.style.opacity = '.55';
    advBtn.style.transform  = 'scale(1.06)';
    teamBtn.style.transform = 'scale(1)';
  });
}

// File upload label
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(".file-upload__input");
    const label = button.parentElement.querySelector(".file-upload__label");
    if (!label) return;
    const defaultLabelText = "No file(s) selected";
    label.textContent = defaultLabelText;
    button.addEventListener("click", () => hiddenInput.click());
    hiddenInput.addEventListener("change", function() {
      const names = Array.prototype.map.call(hiddenInput.files, f => f.name);
      label.textContent = names.join(", ") || defaultLabelText;
    });
  }
);

// Safe dark/light toggle (only if elements exist)
const darkBtn  = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const logo1 = document.getElementById('logo_F');
const logo2 = document.getElementById('LOGO9');
if (logo2) logo2.style.display = 'none';

if (darkBtn && lightBtn) {
  const root = document.querySelector(':root');
  darkBtn.addEventListener('click', () => {
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    if (logo1) logo1.style.display = 'none';
    if (logo2) logo2.style.display = 'block';
  });
  lightBtn.addEventListener('click', () => {
    lightBtn.style.display = 'none';
    darkBtn.style.display = 'block';
    if (logo2) logo2.style.display = 'none';
    if (logo1) logo1.style.display = 'block';
  });
}

// Safe events bar close
const xBtn = document.getElementById('x');
const eventsBar = document.getElementById('events');
if (xBtn && eventsBar) {
  xBtn.addEventListener('click', () => { eventsBar.style.display = 'none'; });
}