var Mouse = (function()
{
	this.x = 0;
	this.y = 0;
	
	this.click = false;
	
	var _mouseMove = (function(e)
	{
		mouse.x = e.x - graphics.canvas.offsetLeft;
		mouse.y = e.y - graphics.canvas.offsetTop;
	});

	var _mouseDown = (function(e)
	{
		mouse.click = true;
		mouse.x = e.x - graphics.canvas.offsetLeft;;
		mouse.y = e.y - graphics.canvas.offsetTop;
	});
	
	var _mouseUp = (function(e)
	{
		mouse.click = false;
		mouse.x = e.x - graphics.canvas.offsetLeft;;
		mouse.y = e.y - graphics.canvas.offsetTop;
	});

	document.addEventListener("mousemove", _mouseMove, false);
	document.addEventListener("mousedown", _mouseDown, false);
	document.addEventListener("mouseup",   _mouseUp,   false);
	
	this.update = (function(){
		console.log("graphics.OffSetX: " + this.x + " graphics.OffSetY: " + this.y);
	});
	
	this.draw = (function(){
		graphics.drawRect(this.x,this.y,10,10,"red");
	});
});
var mouse = new Mouse();