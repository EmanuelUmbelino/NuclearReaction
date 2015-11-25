var Background = function()
{
	this.move = function()
	{
		if(keyboard.arrowLeft)
		{ console.log("Left"); }

		if(keyboard.arrowRight)
		{ console.log("Left"); }

		if(keyboard.arrowUp)
		{ console.log("Up"); }

		if(keyboard.arrowDown)
		{ console.log("Down"); }
	}

	this.update = function()
	{
		this.move();
	}

	this.draw = function() {
		for(var i = 0; i <= 50; i++)
		{
			graphics.drawLine(0 , i * 12 , 800, i * 12);
			graphics.drawLine(i * 16, 0 , i * 16, 600);
		}
	}
}
var background = new Background();
