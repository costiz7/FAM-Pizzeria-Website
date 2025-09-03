document.querySelectorAll('.front-card span').forEach(btn => {
  btn.addEventListener('click', function() {
    const flipCard = this.closest('.pizza-card');
    flipCard.classList.add('flipped');
  });
});

document.querySelectorAll('.back-card span').forEach(btn => {
  btn.addEventListener('click', function() {
    const flipCard = this.closest('.pizza-card');
    flipCard.classList.remove('flipped');
  });
});