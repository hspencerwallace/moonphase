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

//trying this with spheres
push();
// translate(50, 0, 0);
directionalLight(250, 250, 250, 0.25, 0, -1);
 pop();

  // earth
  // push();
  // noStroke();
  // translate(0, -0, 200)
  // ambientMaterial(250);
  //   sphere(370)
  // pop();

  //moon
  push();
  noStroke();
  translate(600, 0, -800);
  specularMaterial(250);
    sphere(100);
  pop();






// //simple ellipsoid translated back so the "shadow" is in front, on the z axis
//   push();
//     translate(0, 0, -101)
//     ellipsoid(100, 100, 100, 70);
//   pop();

// //bezier as "shadow" of moon overlayed onto "illuminated" shape
//   push();
// 	  fill(25, 25, 25);
// 	  beginShape();
//   	  vertex(-100, -150);
//   	  bezierVertex(100, -75, 100, 75, -100, 150);
// 	  endShape(CLOSE)
//   pop();

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