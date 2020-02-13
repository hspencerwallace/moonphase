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


//simple ellipsoid translated back so the "shadow" is in front, on the z axis
  push();
  fill(250, 250, 250);
    translate(0, 0, -101)
    ellipsoid(100, 100, 100, 70);
  pop();

//bezier as "shadow" of moon overlayed onto "illuminated" shape
 
//phase 0 new
// push();
//     fill(25, 25, 25);
//     beginShape();
//       vertex(-100, -150);
//       bezierVertex(150, -105, 150, 105, -100, 150);
//     endShape(CLOSE)
//   pop();

//phase 1
 // push();
 //    fill(25, 25, 25);
 //    beginShape();
 //     vertex(-100, -150);
 //     bezierVertex(126, -105, 126, 105, -100, 150);
 //    endShape(CLOSE)
 //   pop();

  //phase 2
  // push();
  //   fill(25, 25, 25);
  //   beginShape();
  //    vertex(-100, -150);
  //    bezierVertex(112, -105, 112, 105, -100, 150);
  //   endShape(CLOSE)
  //  pop();

  //phase 3 waxing crescent
  // push();
	 //  fill(25, 25, 25);
	 //  beginShape();
  // 	  vertex(-100, -150);
  // 	  bezierVertex(100, -105, 100, 105, -100, 150);
	 //  endShape(CLOSE)
  //  pop();

    //phase 4

    // push();
      // fill(50, 25, 25);
      // beginShape();
      //   vertex(-90, -150);
      //   bezierVertex(80, -105, 80, 105, -90, 150);
      // endShape(CLOSE)
    // pop();

  //phase 5 needs another vertex to block the darkside

  // push();
    //   fill(50, 25, 25);
    //   beginShape();
    //     vertex(-80, -150);
    //     bezierVertex(60, -105, 60, 105, -80, 150);
    //   endShape(CLOSE)
  //   pop();

//phase 6

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(-65, -150);
    //     bezierVertex(50, -105, 50, 105, -65, 150);
    //   endShape(CLOSE)
    // pop();

    //phase 7

    // push();
      // fill(25, 25, 25);
      // beginShape();
      //   vertex(-40, -150);
      //   bezierVertex(26, -105, 26, 105, -40, 150);
      // endShape(CLOSE)
    // pop();

    //phase 8 just over half til, 15 
    // should be first of waning

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(30, -150);
    //     bezierVertex(-150, -105, -150, 105, 30, 150);
    //      bezierVertex(-35, 105, -35, -105, 30, -150);
    //   endShape(CLOSE)
    // pop();  

     //phase 9

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(65, -150);
    //     bezierVertex(-150, -105, -150, 105, 65, 150);
    //      bezierVertex(-65, 105, -65, -105, 65, -150);
    //   endShape(CLOSE)
    // pop();  

      //phase 10

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(95, -150);
    //     bezierVertex(-150, -105, -150, 105, 95, 150);
    //      bezierVertex(-85, 105, -85, -105, 95, -150);
    //   endShape(CLOSE)
    // pop();

      //phase 11

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(130, -150);
    //     bezierVertex(-170, -105, -170, 105, 130, 150);
    //     bezierVertex(-115, 105, -115, -105, 130, -150);
    //   endShape(CLOSE)
    // pop();

       //phase 12

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(170, -150);
    //     bezierVertex(-200, -105, -200, 105, 170, 150);
    //     bezierVertex(-135, 105, -135, -105, 170, -150);
    //   endShape(CLOSE)
    // pop();

    //phase 13

    // push();
    //   fill(25, 25, 25);
    //   beginShape();
    //     vertex(210, -150);
    //     bezierVertex(-200, -125, -200, 125, 210, 150);
    //     bezierVertex(-165, 125, -165, -125, 210, -150);
    //   endShape(CLOSE)
    // pop();

    //phase 14

    push();
      fill(125, 25, 25);
      beginShape();
        vertex(210, -150);
        bezierVertex(-200, -125, -200, 125, 210, 150);
        bezierVertex(-175, 125, -175, -125, 210, -150);
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


//trying this with spheres
// // lights();

// // push();
// // translate(0, 0, 0);
// let dirX = (mouseX / width - 0.5) * 2;
//   let dirY = (mouseY / height - 0.5) * 2;
//   directionalLight(250, 250, 250, -dirX, -dirY, -1);
//  // pop();

//   // earth
//   push();
//   noStroke();
//   translate(0, -0, 810)
//   ambientMaterial(250);
//     sphere(340)
//   pop();

//   //moon
//   push();
//   noStroke();
//   translate(600, 0, -800);
//   ambientMaterial(250);
//     sphere(100);
//   pop();