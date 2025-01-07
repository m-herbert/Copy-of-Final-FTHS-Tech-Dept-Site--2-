
const arrowTop = document.querySelector('.arrow-top');

arrowTop.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});






