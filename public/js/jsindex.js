
(function() {
  var wrapper = document.querySelector('.slideshow-wrapper');
  var leftButton = document.querySelector('.left');
  var rightButton = document.querySelector('.right');
  var slides = document.querySelectorAll('.slide');
  var indicatorWrapper = document.querySelector('.slideshow-indicator-wrapper');
  var indicators = [];
  var current = 0;
  var delay = 5000;
  var total = slides.length - 1;
  var timer;

  rightButton.addEventListener('click', nextSlide, false);
  leftButton.addEventListener('click', prevSlide, false);

  function createIndicator(id) {
    var indicator = document.createElement('div');
    id === 0 ? indicator.className = 'slideshow-indicator indicator-active' : indicator.className = 'slideshow-indicator';
    indicator.id = id;
    indicatorWrapper.appendChild(indicator);
    indicators.push(indicator);
  }

  function assignIndicators() {
    indicators.forEach(function(indicator) {
      indicator.addEventListener('click', function() {
        reset();
        goToSlide(current);
        activateIndicator(current);
        current = +this.id;
        goToSlide(current);
        activateIndicator(current);
        start();
      }, false);
    })
  }

  function addIndicators() {
    for(var i = 0; i <= total; i += 1) {
      createIndicator(i);
    }
    assignIndicators();
  }

  function activateIndicator(localCurrent) {
    indicators[localCurrent].classList.toggle('indicator-active');
  }

  function goToSlide(localCurrent) {
    slides[localCurrent].classList.toggle('active');
  }

  function nextSlideAuto() {
    goToSlide(current);
    activateIndicator(current);
    current = current < total ? current + 1 : 0;
    goToSlide(current);
    activateIndicator(current);

  }

  function nextSlide() {
    reset();
    goToSlide(current);
    activateIndicator(current);
    current = current < total ? current + 1 : 0;
    goToSlide(current);
    activateIndicator(current);
    start();
  }

  function prevSlide() {
    reset();
    goToSlide(current);
    activateIndicator(current);
    current = current === 0 ? total : current - 1;
    goToSlide(current);
    activateIndicator(current);
    start();
  }

  function reset() {
    clearInterval(timer);
  }

  function start() {
    timer = setInterval(nextSlideAuto, delay);
  }

  addIndicators();
  start();
})();
