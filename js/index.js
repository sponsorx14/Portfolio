$(function(){

  // LOADER CONSTANTS
  const profileText1 = ['J','u','n','i','o','r'];
  const profileText2 = [' ','F','r','o','n','t'];
  const profileText3 = [' ','E','n','d'];
  const profileText4 = [' ','D','e','v','e','l','o','p','e','r'];
  const profileText = [...profileText1, ...profileText2, ...profileText3, ...profileText4];
  const animateTextSpan = document.getElementById('animate-text');

  //NAVBAR CONSTANTS
  const nav = document.querySelector('.nav');
  const navTop = nav.offsetTop;

  // FUNCTIONS
  function printText(arr) {
    for (let i=0; i<arr.length; i++) {
        setTimeout(function() {
            animateTextSpan.append(...arr[i]);
        }, 100 * i);
    }
  }

  function stickyNav() {
    console.log(window.scrollY);
    console.log(nav.offsetTop);
    if(window.scrollY > navTop) {

      document.body.classList.add('fixed-nav');
    } else {

      document.body.classList.remove('fixed-nav');
    }
  }

  // LOADER ANIMATION
  setTimeout(function(){
    $('.loader').fadeOut(600, function(){
      $(this).remove();
      printText(profileText);
    });
  },400);

  // NAVBAR OFFSET
  window.addEventListener('scroll', stickyNav);


});
