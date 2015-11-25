var Sound = function() 
{
	this.music = new Audio();
	this.music.src = "./mp3/mozard.mp3";

	this.music.volume = 1;
	this.music.play();

}
var sound = new Sound();
