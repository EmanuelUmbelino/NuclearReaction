var Scene = function()
{
	this.type = "menu";
	this.begin = false;

	this.update = function() 
	{
		if(this.type === "menu")
		{
			menu.update();
			sound.update();
		}
		if(this.type === "gameplay")
		{
			atom.update();
			sound.update();
			neutrinoRain.update();
			if(this.begin)
			{time.update();}
		}
	}

	this.draw = function() 
	{
		if(this.type === "menu")
		{
			background.draw();
			menu.draw();
		}
		if(this.type === "gameplay")
		{
			background.draw();
			atom.draw();
			hud.draw();
			neutrinoRain.draw();
		}
	}
}
var scene = new Scene();
