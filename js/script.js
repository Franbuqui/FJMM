$(document).ready(function() {
  // Inicializar Slick Slider en la sección de proyectos
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: true, dots: true }
      }
    ]
  });

  // Inicializar Slick Slider en la sección de certificados
  $('.certificates-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 certificados en pantallas grandes
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: true, dots: true }
      }
    ]
  });

  // Preloader
  $(window).on('load', function() {
    $('#loader-wrapper').fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // Toggle Menu al Hacer Click
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    navLinks.classList.toggle('open');
    menuIcon.classList.toggle('open');
  });

  // Cerrar Menu al Hacer Click Fuera
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open');
    }
  });

  // Cerrar Menu al Hacer Click en un Enlace
  document.querySelectorAll('.nav-links li a').forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open');
    });
  });

  // Scroll Suave para Navegación
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    }
  });

  // Mostrar u Ocultar Flecha para Volver al Inicio
  window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Modal para ver certificados en grande
  document.querySelectorAll('.certificate-item img').forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${this.src}" alt="Certificate">
        </div>
      `;
      document.body.appendChild(modal);

      // Cerrar modal
      modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
    });
  });

  // Scroll Suave hacia el Inicio
  document.getElementById('back-to-top').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
