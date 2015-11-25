var Manager = function() 
{
	this.update = function() 
	{
		scene.update();
	}

	this.draw = function() 
	{
		graphics.clear();
		scene.draw();
	}
}
var manager = new Manager();
