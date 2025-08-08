window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  document.querySelector('.layer-back').style.transform = `translateY(${scrollPosition * 0.5}px)`; // move mais devagar
  document.querySelector('.layer-middle').style.transform = `translateY(${scrollPosition * 0.6}px)`; // velocidade média
  document.querySelector('.layer-front').style.transform = `translateY(${scrollPosition * 0.7}px)`; // move mais rápido
    document.querySelector('.box').style.transform = `translateY(${scrollPosition * 0.8}px)`; // move mais rápido ainda
});