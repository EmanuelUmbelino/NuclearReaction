var Sound = function() 
{
	this.music = new Audio();
	this.music.src = "./mp3/mozard.mp3";

	this.music.volume = 0;
	this.music.play();
	
	this.update = function()
	{
	}

}
var sound = new Sound();
