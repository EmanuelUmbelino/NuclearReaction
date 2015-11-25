var Graphics = (function()
{
	this.canvas = document.getElementById("myCanvas");
	this.ctx = this.canvas.getContext("2d");

	this.width = this.canvas.width;
	this.height = this.canvas.height;

	this.clear = function()
	{
		this.ctx.clearRect(0,0,this.width,this.height);
		this.ctx.fillStyle = "black";
	}

	this.drawText = (function(x, y, fontsize, text , color){
		this.ctx.font = fontsize + " Comic Sans MS";
		this.ctx.fillStyle = color;
		this.ctx.fillText(text,x,y);
		this.ctx.textAlign = "center";
	});

	this.drawLine = (function(x , y , x2, y2){
			this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x2, y2);
			this.ctx.strokeStyle = "#bbbbbb"
      this.ctx.stroke();
	});

	this.drawCicle = (function(x, y, r, color) {
		graphics.ctx.beginPath();
		graphics.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
		graphics.ctx.fillStyle = color;
		graphics.ctx.fill();
	});

	this.drawGirth = (function(x, y, r, color) {
		graphics.ctx.beginPath();
		graphics.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
		graphics.ctx.strokeStyle = color;
		graphics.ctx.stroke();
	});

	this.drawRect = function(x,y,w,h,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x,y,w,h);
	}

	this.drawStrokeRect = function(x,y,w,h,color)
	{
		this.ctx.strokeStyle = color;
		this.ctx.strokeRect(x,y,w,h);
	}

	this.drawShadowBegin = function(x, y, blur, color)
	{
		graphics.ctx.save();
		graphics.ctx.shadowColor = color;
		graphics.ctx.shadowOffsetX = x;
		graphics.ctx.shadowOffsetY = y;
		graphics.ctx.shadowBlur = blur;
	}

	this.drawShadowEnd = function()
	{
		graphics.ctx.restore();
	}
});

var graphics = new Graphics();
