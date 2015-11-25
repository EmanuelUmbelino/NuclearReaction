var Neutrino = function()
{
	this.x = 0;
	this.y = 0;
	this.direction = "";
	this.angle = 0;
	this.speed = 2;
	this.speedX = 0;
	this.speedY = 0;
}

var NeutrinoRain = function()
{
	this.direction = ["UpDown", "DownUp", "RightLeft", "LeftRight"];

	this.neutrinos = new Array();
	this.number = 20;
	for(var i = 0; i < this.number; i++)
	{
		this.neutrinos[i] = new Neutrino();
		this.neutrinos[i].direction = this.direction[Math.floor(Math.random() * this.direction.length)];
		
		switch (this.neutrinos[i].direction)
		{
			case "DownUp": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50;  this.neutrinos[i].y = 0;this.neutrinos[i].angle = Math.floor(Math.random() * (170 - 10))+10; 
				this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
			case "UpDown": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50; this.neutrinos[i].y = 600;this.neutrinos[i].angle = Math.floor(Math.random() * (350 - 190))+190; 
				this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
			case "RightLeft": this.neutrinos[i].x = 800;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (260 - 100))+100;
				this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
			case "LeftRight": this.neutrinos[i].x = 0;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (530 - 350))+350;
				this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
		}
	}
	this.restart = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			this.neutrinos[i] = new Neutrino();
			this.neutrinos[i].direction = this.direction[Math.floor(Math.random() * this.direction.length)];
			
			switch (this.neutrinos[i].direction)
			{
				case "DownUp": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50;  this.neutrinos[i].y = 0;this.neutrinos[i].angle = Math.floor(Math.random() * (170 - 10))+10; 
					this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
				case "UpDown": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50; this.neutrinos[i].y = 600;this.neutrinos[i].angle = Math.floor(Math.random() * (350 - 190))+190; 
					this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
				case "RightLeft": this.neutrinos[i].x = 800;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (260 - 100))+100;
					this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
				case "LeftRight": this.neutrinos[i].x = 0;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (530 - 350))+350;
					this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
			}
		}
	}

	this.move = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			this.neutrinos[i].y += this.neutrinos[i].speedY * this.neutrinos[i].speed;
			this.neutrinos[i].x += this.neutrinos[i].speedX * this.neutrinos[i].speed;
		}
	}
		
	this.returnToInitPos = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			if(this.neutrinos[i].x < 0 || this.neutrinos[i].x > 800 || this.neutrinos[i].y < 0 || this.neutrinos[i].x > 800)
			{
				switch (this.neutrinos[i].direction)
				{
					case "DownUp": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50;  this.neutrinos[i].y = 0;this.neutrinos[i].angle = Math.floor(Math.random() * (170 - 10))+10; 
						this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
					case "UpDown": this.neutrinos[i].x = Math.floor(Math.random() * (750 - 50))+50; this.neutrinos[i].y = 600;this.neutrinos[i].angle = Math.floor(Math.random() * (350 - 190))+190; 
						this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
					case "RightLeft": this.neutrinos[i].x = 800;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (260 - 100))+100;
						this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
					case "LeftRight": this.neutrinos[i].x = 0;  this.neutrinos[i].y = Math.floor(Math.random() * (500 - 100))+100;this.neutrinos[i].angle = Math.floor(Math.random() * (530 - 350))+350;
						this.neutrinos[i].speedX = Math.cos(this.neutrinos[i].angle);	this.neutrinos[i].speedY = Math.sin(this.neutrinos[i].angle);break;
				}
			}
		}
	}
	this.collision = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			if(this.neutrinos[i].x > atom.x - atom.size && this.neutrinos[i].y > atom.y - atom.size && this.neutrinos[i].x + 5 < atom.x - atom.size + atom.size*2 && this.neutrinos[i].y + 5 < atom.y - atom.size + atom.size*2)
			{scene.type = "menu";fade.active = true; fade.path = "menu";}
		}	
	}

	this.update = function() 
	{
			this.move();
			this.returnToInitPos();
			this.collision();
	}

	this.draw = function() 
	{
		for(var i = 0; i < this.number; i++)
		{ graphics.drawCicle(this.neutrinos[i].x,this.neutrinos[i].y, 5, "#CC0000");}
	}

}
var neutrinoRain = new NeutrinoRain();
