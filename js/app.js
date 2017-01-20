$(document).ready(function () {
  $('.blog-post').addClass('hidden')viewportChecker({
    classToAdd: 'fade-in',
    classToRemove: 'hidden',
    removeClassAfterAnimation: true,
    offset: -100
  });
});
