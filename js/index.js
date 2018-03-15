$(function(){

  // PROFILE TEXT CONSTANTS
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
    if(window.scrollY > navTop) {
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
    }
  }


  //Loader
  window.addEventListener('load', function(){
    $('.loader').fadeOut(400, function() {
      $(this).remove();
      window.addEventListener('scroll', stickyNav);
      printText(profileText);
    });
  });

});
