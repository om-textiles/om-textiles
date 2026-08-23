// OM Textiles — simple multi-image slideshow for product cards.
// Each .slideshow box auto-advances through its .slide children
// every 4 seconds, and the dots below let a visitor jump directly
// to an image. No setup needed beyond the HTML markup in the cards.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slideshow').forEach(function (box) {
    var slides = box.querySelectorAll('.slide');
    var dots = box.querySelectorAll('.dot');
    var current = 0;

    function show(index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
      current = index;
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); });
    });

    show(0);

    if (slides.length > 1) {
      setInterval(function () {
        show((current + 1) % slides.length);
      }, 4000);
    }
  });
});
