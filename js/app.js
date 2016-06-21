$(document).foundation();
$(document).ready(function(){
  
  $('.feature').viewportChecker({
    classToAdd: 'fade-in long-delay slow mui-enter mui-enter-active',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: -100

  });
});
