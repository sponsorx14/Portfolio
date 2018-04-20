$(function(){

  // PROFILE TEXT CONSTANTS
  const profileText = 'Junior Front End Developer';
  const animateTextSpan = document.getElementById('animate-text');

  //NAVBAR CONSTANTS
  const nav = document.querySelector('.nav');
  const navTop = nav.offsetTop;
  const hamburger = document.querySelector('.hamburger');

  //Contact CONSTANTS
  const input1 = document.querySelector('.input-1');
  const input2 = document.querySelector('.input-2');
  const textarea = document.querySelector('.textarea');

  //Aside CONSTANTS
  const asideLinks = document.querySelector('.aside-links');
  const scrollTopButton = document.querySelector('.scroll-top');

  // FUNCTIONS
  function printText(text) {
    for (let i=0; i<text.length; i++) {
        setTimeout(function() {
            animateTextSpan.append(...text[i]);
        }, 100 * i);
    }
  }


  function stickyNav() {
    setTimeout(function(){
      if(window.scrollY > navTop) {
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
      }
    },50)
  }

  function showAside() {
    setTimeout(function(){
      if(window.scrollY > 1300 && window.innerWidth > 1250){
        $(asideLinks).fadeIn();
      } else {
        $(asideLinks).fadeOut(200);
      }
    },400)
  }
  function showScrollTopButton() {
    setTimeout(function(){
      if(window.scrollY > 800){
        $(scrollTopButton).fadeIn();
      } else {
        $(scrollTopButton).fadeOut(200);
      }
    },400)
  }

  function inputAnimation() {
    if(this.value != '' ){
      this.classList.add('has-content');
    }else {
      this.classList.remove('has-content');
    }
  }

  function getActive(e){
    e.preventDefault();
    $(this).removeClass('active');
  }

  function smoothScroll(e) {
    $('.hamburger').removeClass('is-active');
    $('.navbar').removeClass('navbar-collapse');
    e.preventDefault();
    let target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
    'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
    window.location.hash = target;
  });
  }

  //Loader
  window.addEventListener('load', function(){
    $('.loader').fadeOut(400, function() {
      $(this).remove();
      printText(profileText);
    });
  });

  //stickyNav
  window.addEventListener('scroll', function(){
    stickyNav();
    showAside();
    showScrollTopButton();

  });
  hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    $('.navbar').toggleClass('navbar-collapse');

  })

  //Contact Input Animation
  input1.addEventListener('focusout', inputAnimation);
  input2.addEventListener('focusout', inputAnimation);
  textarea.addEventListener('focusout', inputAnimation);


  //Smooth scroll events
  $('.scroll-top-button').on('click', smoothScroll);
  $('.jumbotron-arrow').on('click', smoothScroll);
  $('.nav-links').on('click', smoothScroll);
  $('.contact-button').on('click', smoothScroll);

});
