$(document).ready(function() {
  // Initialize Slick Slider
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 projects per view on large screens
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Custom previous arrow
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Keep 2 projects on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 project per view on small screens
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

  // Toggle Menu on Click
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    navLinks.classList.toggle('open');
    menuIcon.classList.toggle('open'); // Animate the icon
  });

  // Close Menu When Clicking Outside
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open'); // Animate the icon
    }
  });

  // Close Menu When Clicking a Link
  const navItems = document.querySelectorAll('.nav-links li a');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('open'); // Animate the icon
    });
  });

  // Smooth Scroll for Navigation
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    }
  });

  // Show or Hide Back to Top Arrow
  window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Show after scrolling 300px
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Smooth Scroll to Top
  document.getElementById('back-to-top').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
