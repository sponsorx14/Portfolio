$(function(){
  // LOADER ANIMATION
  setTimeout(function(){
    $('.loader').fadeOut(600, function(){
      $(this).remove();
    });
  },400);

  // CONSTANTS
  const profileText = ['','','','J','u','n','i','o','r',' ','F','r','o','n','t',' ','E','n','d',' ','D','e','v','e','l','o','p','e','r',];
  const animateTextSpan = document.getElementById('animate-text');

  function printText(arr) {
    for (let i=0; i<arr.length; i++) {
        setTimeout(function() {
            animateTextSpan.append(...arr[i]);
        }, 200 * i);
    }
  }

  printText(profileText);
});
