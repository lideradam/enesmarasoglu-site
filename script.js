(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  mobile.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }
})();
