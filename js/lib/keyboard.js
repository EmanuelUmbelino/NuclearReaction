var keyboard = function()
{
	this.arrowRight = false;
	this.arrowLeft = false;
	this.arrowUp = false;
	this.arrowDown = false;

	this.keydown = function(e)
	{
		if(e.keyCode === 65 || e.keyCode === 37)
		{
			atom.isMoveLeft = true;
			this.arrowLeft = true;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
			atom.isMoveRight = true;
			this.arrowRight = true;
		}

		if(e.keyCode === 38 || e.keyCode === 87)
		{
			atom.isMoveDown = true;
			this.arrowDown = true;
		}

		if(e.keyCode === 40 || e.keyCode === 83)
		{
			atom.isMoveUp = true;
			this.arrowUp = true;
		}
	}

	this.keyup = function(e)
	{
		if(e.keyCode === 65 || e.keyCode === 37)
		{
			atom.isMoveLeft = false;
			this.arrowLeft = false;
		}

		if(e.keyCode === 39 || e.keyCode === 68)
		{
			atom.isMoveRight = false;
			this.arrowRight = false;
		}
		if(e.keyCode === 38 || e.keyCode === 87)
		{
			atom.isMoveDown = false;
			this.arrowDown = false;
		}
		if(e.keyCode === 40 || e.keyCode === 83)
		{
			atom.isMoveUp = false;
			this.arrowUp = false;
		}
	}
}

var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);
