$(document).ready(function() {
  // Inicializar Slick Slider
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 2 proyectos en pantallas grandes
    slidesToScroll: 1,
    arrows: true, // Habilitar flechas de navegación
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Flecha personalizada anterior
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Flecha personalizada siguiente
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Mantener 2 proyectos en pantallas medianas
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostrar 1 proyecto en pantallas pequeñas
          arrows: true, // Mantener flechas en pantallas pequeñas
          dots: true
        }
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
    menuIcon.classList.toggle('open'); // Animar el icono
  });

  // Cerrar Menu al Hacer Click Fuera
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open'); // Animar el icono
    }
  });

  // Cerrar Menu al Hacer Click en un Enlace
  const navItems = document.querySelectorAll('.nav-links li a');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open'); // Animar el icono
    });
  });

  // Scroll Suave para Navegación
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    }
  });

  // Mostrar u Ocultar Flecha para Volver al Inicio
  window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Mostrar después de desplazar 300px
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
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
