var Buttons = function(){

	this.x = 400;
	
	this.playY = 250;
	this.playPivotY = this.playY - 50
	this.playWidth = 130;
	this.playHeight = 70;

	this.easyY = 230;
    this.easyPivotY = this.easyY - 50
    this.easyWidth = 110;
    this.easyHeight = 50;
	
	this.meadiumY = 340;
    this.meadiumPivotY = this.meadiumY - 50
    this.meadiumWidth = 180;
    this.meadiumHeight = 60;
	
	this.hardY = 450;
    this.hardPivotY = this.hardY - 50
    this.hardWidth = 115;
    this.hardHeight = 55;
	
	this.directionY = 350;
    this.directionPivotY = this.directionY - 50
    this.directionWidth = 400;
    this.directionHeight = 60;

	this.creditsY = 450;
    this.creditsPivotY = this.creditsY - 50
    this.creditsWidth = 230;
    this.creditsHeight = 50;

	this.draw = function() 
	{
		graphics.drawText(this.x, this.playY, "70px", "Play", "Green");
		graphics.drawText(this.x, this.directionY, "70px", "Instructions", "Green");
		graphics.drawText(this.x, this.creditsY, "70px", "Credits", "Green");

		if(mouse.x > this.x - this.playWidth/2 && mouse.y > this.playPivotY && mouse.x < this.x + this.playWidth/2 && mouse.y < this.playPivotY + this.playHeight)
		{ 
			graphics.drawCicle(this.x - this.playWidth/2 - 20, this.playPivotY + 30,10, "GREEN") 
			if(mouse.click) 
			{ 
				fade.active = true; fade.path = "levelSelection";
				atom.x = (graphics.canvas.width / 2);
				atom.y = (graphics.canvas.height / 2);
			}
		}

		if(mouse.x > this.x - this.directionWidth/2 && mouse.y > this.directionPivotY && mouse.x < this.x + this.directionWidth/2 && mouse.y < this.directionPivotY + this.creditsHeight)
		{ 
			graphics.drawCicle(this.x - this.directionWidth/2 - 20, this.directionPivotY + 30,10, "GREEN"); 
			if(mouse.click) { fade.active = true; fade.path = "directions";} 
		}

		if(mouse.x > this.x - this.creditsWidth/2 && mouse.y > this.creditsPivotY && mouse.x < this.x + this.creditsWidth/2 && mouse.y < this.creditsPivotY + this.creditsHeight)
		{ graphics.drawCicle(this.x - this.creditsWidth/2 - 20, this.creditsPivotY + 30,10, "GREEN") }
	}
}

var buttons = new Buttons();
