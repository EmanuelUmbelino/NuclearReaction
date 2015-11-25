var Sound = (function() {
  this.music = new Audio();
  this.music.src = "./mp3/mozard.mp3";

  this.update = (function() {
    this.music.play();
    this.music.volume = 0;
  });

});
var sound = new Sound();
