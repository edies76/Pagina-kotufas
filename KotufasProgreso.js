document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.project-title, .progress-title').forEach(title => {
      title.addEventListener('click', () => {
          const info = title.nextElementSibling;
          info.classList.toggle('active');
      });
  });

  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function moveCarousel() {
      currentIndex = (currentIndex + 1) % totalItems;
      const newTransform = -currentIndex * 100 + '%';
      document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;
  }

  setInterval(moveCarousel, 5000); // Cambia de imagen cada 5 segundos
});
