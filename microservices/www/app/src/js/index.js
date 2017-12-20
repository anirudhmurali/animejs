var playButton = document.querySelector('.play');
var pauseButton = document.querySelector('.pause');
var restartButton = document.querySelector('.restart');
var progress = document.querySelector('.progress');

var myAnimation = anime({
  targets: 'div',
  translateX: function() { return anime.random(10, 14) + 'rem'; },
  scale: function() { return anime.random(10,20) / 10; },
  rotate: function() { return anime.random(-360,360); },
  duration: function() { return anime.random(800,1400); },
  loop: true,
  easing: 'easeOutQuad',
  update: function(animation) {
    progress.value = animation.progress;
  }
});

playButton.addEventListener('click', function() { myAnimation.play(); });
pauseButton.addEventListener('click', function() { myAnimation.pause(); });
restartButton.addEventListener('click', function() { myAnimation.restart(); });
progress.addEventListener('input', function() { myAnimation.seek(progress.value); });