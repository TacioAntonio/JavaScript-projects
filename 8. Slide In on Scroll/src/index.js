function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('img');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // Espera o meio da imagem de cima pr baixo
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      const isHalfShown = slideInAt > sliderImage.offsetTop; // bottom of the image
      
      // Espera o meio da imagem de baixo pr cima,
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isNotScrolledPast = window.scrollY < imageBottom;
      
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));