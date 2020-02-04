// The function should take a arguments/parameters for 
// size, color, and phase. You should be able to draw a 
// number of moons with different phases, sizes and colors 
// within your draw() function. Phase should be a number 
// from 0 - 30, where 0 is a new moon, 15 is a full moon, 
// and 30 is an almost new moon. 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);



}

function draw() {
  background(0);

ellipse(-100, -100, 100, 100)

//simple ellipsoid translated back so the "shadow" is in front, on the z axis
push();
translate(0, 0, -101)
ellipsoid(100, 100, 100, 70);
pop();

//bezier as "shadow" of moon overlayed onto "illuminated" shape
  push();
	  fill(25, 25, 25);
	  beginShape();
	  vertex(-100, -150);
	  bezierVertex(100, -75, 100, 75, -100, 150);
	  endShape(CLOSE)
  pop();

//rotating loop of many shapes
    // push();
	   //  for (let x = width/15; x <= width/5; x = x * 1.02) {
	   //      noStroke();
	   //      rotate(radians(frameCount / 20));
	   //      fill(200, 40);
	   //      cone(x/2, x);
	   //    }
    //  pop();




}

// function drawMoon(size, color, phase){

//   //this code draws moons




// }