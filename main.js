//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
ch = 100;
cw = 50;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
y = 225;
x = 10;

function add() {
	//upload car, and background images on the canvas.
	ub = new Image();
	ub.onload = upb;
	ub.src = background_image; 

	uc = new Image();
	uc.onload = upc;
	uc.src = greencar_image;
}

function upb() {
	//Define function ‘uploadBackground’
	ctx.drawImage(ub, 0, 0, canvas.width, canvas.height);

}

function upc() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(uc, x, y, cw, ch);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(y >= 0){
		y = y - 10;
		console.log(x + ", " + y);
		upb;
		upc;
	}
	//Define function to move the car upward
}

function down()
{
	if(y <= 500){
		y = y + 10;
		console.log(x + ", " + y);
		upb;
		upc;
	}
	//Define function to move the car downward
}

function left()
{
	if(x >= 0){
		x = x - 10;
		console.log(x + ", " + y);
		upb;
		upc;
	}
	//Define function to move the car left side
}

function right()
{
	if(x <= 700){
		x = x + 10;
		console.log(x + ", " + y);
		upb;
		upc;
	}
	//Define function to move the car right side
}
