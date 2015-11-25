var Atom = function(name, type)
{
	this.type = type;

	this.x = (graphics.canvas.width / 2);
	this.y = (graphics.canvas.height / 2);

	this.eletronAngle = 0;

	this.name = name;
	this.size = 0;

	this.r = 10;

	this.speed = 10;

	this.isMoveUp = false;
	this.isMoveDown = false;
	this.isMoveRight = false;
	this.isMoveLeft = false;

	this.lithium = function()
	{	
		// Atom background
		graphics.ctx.save();
		graphics.ctx.globalAlpha = 0.65;
		graphics.drawCicle(this.x, this.y, 70.4, "#eee");
		graphics.ctx.restore();
		// Fist eletron orbit
		graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");
		// Second eletron orbit
		graphics.drawGirth(this.x,this.y, 55, "#5D5D5D");
		// Third eletron orbit
		graphics.drawGirth(this.x,this.y, 70.5, "#5D5D5D");
		// Protons
		graphics.drawCicle(this.x, this.y - 12.5, this.r, "#000099");
		graphics.drawCicle(this.x + 10, this.y + 10, this.r, "#000099");
		graphics.drawCicle(this.x - 10, this.y + 10, this.r, "#000099");
		// Neutrons
		graphics.drawCicle(this.x - 10, this.y - 8.5, this.r, "#CC0000");
		graphics.drawCicle(this.x + 10, this.y - 8.5, this.r, "#CC0000");
		graphics.drawCicle(this.x, this.y + 12.5, this.r, "#CC0000");
		// Proton middle
		graphics.drawCicle(this.x, this.y, this.r, "#000099");
		// Eltrons velocity
		this.eletronAngle += 10;
		// Fist eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 50); // 90 + widht of quadrate?
		graphics.drawCicle(30, 30, 5, "#00CC00");
		graphics.ctx.restore();
		// second eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
		graphics.drawCicle(40, 40, 5, "#00CC00");
		graphics.ctx.restore();
		// Third eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 180); // 90 + widht of quadrate?
		graphics.drawCicle(50, 50, 5, "#00CC00");
		graphics.ctx.restore();
	}
	
	this.helium = function()
	{	
		// Atom background
		graphics.ctx.save();
		graphics.ctx.globalAlpha = 0.65;
		graphics.drawCicle(this.x, this.y, 54.1, "#eee");
		graphics.ctx.restore();
		// Fist eletron orbit
		graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");
		// Second eletron orbit
		graphics.drawGirth(this.x,this.y, 55, "#5D5D5D");
		// Neutrons
		graphics.drawCicle(this.x - 10, this.y, this.r, "#CC0000");
		graphics.drawCicle(this.x + 10, this.y, this.r, "#CC0000");
		// Protons
		graphics.drawCicle(this.x, this.y - 10, this.r, "#000099");
		graphics.drawCicle(this.x, this.y + 10, this.r, "#000099");
		// Eltrons velocity
		this.eletronAngle += 10;
		// Fist eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
		graphics.drawCicle(30, 30, 5, "#00CC00");
		graphics.ctx.restore();
		// second eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 180); // 90 + widht of quadrate?
		graphics.drawCicle(40, 40, 5, "#00CC00");
		graphics.ctx.restore();
	}
	
	this.hydrogen = function()
	{	
		// Fist eletron orbit
		graphics.drawGirth(this.x,this.y, 42.5, "#5D5D5D");
		// Protons
		graphics.drawCicle(this.x, this.y, 10, "#CC0000");
		// Eltrons velocity
		this.eletronAngle += 10;
		// Eletron
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.eletronAngle * Math.PI / 100); // 90 + widht of quadrate?
		graphics.drawCicle(30, 30, 5, "#00CC00");
		graphics.ctx.restore();
	}
	
	this.move = function()
	{
		if(this.isMoveUp)
		{ this.y += this.speed;}

		if(this.isMoveDown)
		{ this.y -= this.speed;}

		if(this.isMoveRight)
		{this.x += this.speed;}

		if(this.isMoveLeft)
		{ this.x -= this.speed;}
	}

	this.update = function()
	{
		if(this.type === "InGame")
		{ this.move(); this.collisions();}
	}
	
	this.collisions = function() 
	{
		if(this.type === "InGame")
		{ 
			if(atom.x + this.size > graphics.canvas.width)
			{ atom.x = graphics.canvas.width - this.size; }
			
			else if(atom.x - this.size < 0) 
			{ atom.x =  this.size; }
			
			if(atom.y + this.size > graphics.canvas.height)
			{ atom.y = graphics.canvas.height - this.size; }
			
			else if(atom.y - this.size < 0)
			{ atom.y =  this.size; }
		}
	}
	this.drawAtom = function()
	{
		switch (this.name)
		{
			case "hydrogen":
				this.hydrogen();
				break;
			case "helium":
				this.helium();
				break;
			case "lithium":
				this.lithium();
				break;
		}
	}
	this.draw = function()
	{
		this.drawAtom();
	}
}
var atom = new Atom("lithium", "InGame");
