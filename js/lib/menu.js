var Menu = (function() {

	this.menuAlpha = 1.0;
	this.directionsAlpha = 0.0;
	this.levelSelectionAlpha = 0.0;

	this.atom = new Atom("lithium", "Menu");
	this.atom.x = 200;
	this.atom.y = 300;
	
	this.atom2 = new Atom("hydrogen", "Menu");
	this.atom2.x = 200;
	this.atom2.y = 210;
	
	this.atom1 = new Atom("lithium", "Menu");
	this.atom1.x = 200;
	this.atom1.y = 450;
	
	this.atom3 = new Atom("helium", "Menu");
	this.atom3.x = 600;
	this.atom3.y = 320;
	


	this.fadeEnable = (function(){

		fade.active = true;

		if(fade.active && fade.path === "directions")
		{
				this.menuAlpha -= 0.05;

				if(this.menuAlpha <= 0)
				{
					this.menuAlpha = 0;
					this.directionsAlpha += 0.05;
				}

				if(this.directionsAlpha >= 1 && fade.active)
				{
					this.directionsAlpha = 1;
					fade.active = false;
				}
		}

		if(fade.active && fade.path === "menu")
		{
			this.directionsAlpha -= 0.05;
			this.levelSelectionAlpha -= 0.05;

			if(this.directionsAlpha <= 0 || this.levelSelectionAlpha <= 0)
			{
				this.directionsAlpha = 0;
				this.levelSelectionAlpha = 0;
				this.menuAlpha += 0.05;
			}

			if(this.menuAlpha >= 1 && fade.active)
			{
				this.menuAlpha = 1;
				fade.active = false;
			}
		}

		
		if(fade.active && fade.path === "levelSelection")
		{
				this.menuAlpha -= 0.05;
				
				if(this.menuAlpha <= 0)
				{
					this.menuAlpha = 0;
					this.levelSelectionAlpha += 0.05;
				}

				if(this.levelSelectionAlpha >= 1 && fade.active)
				{
					this.levelSelectionAlpha = 1;
					fade.active = false;
				}
		}

	});

	this.update = (function() {

		if(this.directionsAlpha >= 1)
		{ this.updateDirections();}
		
		if(this.levelSelectionAlpha >= 1)
		{ this.updateLevelSelection();}

		this.fadeEnable();
		if(this.menuAlpha >= 1)
		{ this.drawMain(); neutrinoRain.update();}
	});

	this.updateDirections = (function(){

		var x = 600;
		var y = 500;
		var w = 120;
		var h = 50;

		graphics.drawText(x, y + 40, "50px", "Back", "BLUE");

		if(mouse.x > x - w/2 && mouse.y > y && mouse.x < x + w/2 && mouse.y < y + h)
		{ graphics.drawCicle(x - w/2 - 20, y + 25, 7.5, "BLUE"); if(mouse.click) {fade.active = true; fade.path = "menu";} }

	});
	
	this.updateLevelSelection = (function(){

		var x = 650;
		var y = 500;
		var w = 120;
		var h = 50;

		graphics.drawText(x, y + 40, "50px", "Back", "BLUE");

		if(mouse.x > x - w/2 && mouse.y > y && mouse.x < x + w/2 && mouse.y < y + h)
		{ graphics.drawCicle(x - w/2 - 20, y + 25, 7.5, "BLUE"); if(mouse.click) {fade.active = true; fade.path = "menu";} }
	
		
			if(mouse.x > buttons.x - buttons.easyWidth/2 && mouse.y > buttons.easyPivotY && mouse.x < buttons.x + buttons.easyWidth/2&& mouse.y < buttons.easyPivotY + buttons.easyHeight)
			  { graphics.drawCicle(buttons.x - buttons.easyWidth/2 - 20, buttons.easyPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; scene.type = "gameplay";} atom.name = "hydrogen";}
			
			
			if(mouse.x > buttons.x - buttons.meadiumWidth/2 && mouse.y > buttons.meadiumPivotY && mouse.x < buttons.x + buttons.meadiumWidth/2 && mouse.y < buttons.meadiumPivotY + buttons.meadiumHeight)
			  { graphics.drawCicle(buttons.x - buttons.meadiumWidth/2 - 20, buttons.meadiumPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; scene.type = "gameplay";}atom.name = "helium";}
					
			
			if(mouse.x > buttons.x - buttons.hardWidth/2&& mouse.y > buttons.hardPivotY && mouse.x < buttons.x + buttons.hardWidth/2 && mouse.y < buttons.hardPivotY + buttons.hardHeight)
			  { graphics.drawCicle(buttons.x - buttons.hardWidth/2 - 20, buttons.hardPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; scene.type = "gameplay";}atom.name = "lithium";}
				
		
		
		

	});

	this.drawDirections = (function(){
			graphics.drawText(400 , 100, "80px", "Directions", "blue");

			if(this.menuAlpha <= 0)
			{ this.atom.draw();}
	});
	
	this.drawLevelSelection = (function(){
			graphics.drawText(400 , 100, "80px", "Level Selection", "blue");
			

			if(this.menuAlpha <= 0)
			{	
				this.atom1.draw();
				this.atom2.draw();
				this.atom3.draw(); 
			}
		
	});

	this.drawMain = (function(){
		graphics.drawText(400 , 100, "80px", "Nuclear Reaction", "blue");
		buttons.draw();
	});

	this.drawTexts = (function(){
		graphics.drawText(200 , 435, "50px", "You", "Green");
		graphics.drawText(590 , 375, "50px", "What you need", "Green");
		graphics.drawText(590 , 440, "50px", "be far away", "Green");
	});
	
	this.drawTextsLs = (function(){
		graphics.drawText(buttons.x , buttons.easyY, "50px", "Easy", "Green");
		graphics.drawText(buttons.x , buttons.meadiumY, "50px", "Medium", "Green");
		graphics.drawText(buttons.x , buttons.hardY, "50px", "Hard", "Green");
		
	});

	this.draw = (function() {

		
		
		
			// Draw neutrinos rain
			graphics.ctx.save();
			graphics.ctx.globalAlpha = this.menuAlpha;
			neutrinoRain.draw();
			graphics.ctx.restore();
		
			
			
			// Draw main menu
			graphics.ctx.save();
			if(this.directionsAlpha != 0) this.drawDirections();
			graphics.ctx.globalAlpha = this.directionsAlpha;
			graphics.drawText(600, 540, "50px", "Back", "BLUE");
			graphics.drawCicle(600,(graphics.canvas.height / 2), 5, "#CC0000");
			this.drawTexts();
			graphics.ctx.restore();
			
			// Draw main Level Selection
			graphics.ctx.save();
			if(this.levelSelectionAlpha != 0) this.drawLevelSelection();
			graphics.ctx.globalAlpha = this.levelSelectionAlpha;
			this.drawTextsLs();
			graphics.ctx.restore();	
			
			graphics.ctx.fillStyle = "#FF0000"; 
		
		
		
		
		
	});

});
var menu = new Menu();
