// The function should take a arguments/parameters for 
// size, color, and phase. You should be able to draw a 
// number of moons with different phases, sizes and colors 
// within your draw() function. Phase should be a number 
// from 0 - 30, where 0 is a new moon, 15 is a full moon, 
// and 30 is an almost new moon. 
let stars;

let angle = 0.0;

function preload() {
  stars = loadImage('stars.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  slider = createSlider(0, 30);
  slider.position((width/2 - 150), 10);
  slider.style('width', '300px');

}

function draw() {
  background(0);

  let phase = slider.value();
  console.log(phase);

// rotation stuff, rotate is below in the moons matrix
  angle = angle + (0.005);
  let c = tan(angle);
//camera rotation stuff
  camera(0, 20 + sin(frameCount * (0.05)) * 10, 200 + sin(frameCount * 0.005) * 3000, 0, 0, 0, 0, 1, 0);


//MOON: simple ellipsoid translated back in Z so the "shadow" is in front
  push();
  // fill(250, 250, 250);
  // ambientMaterial(250);
    translate(0, 0, -101);
    noStroke();
    ellipsoid(100, 100, 100, 75, 75);
  pop();

  //planetarium
   push();
    fill(0, 0, 0);
    translate(0, 0, -101);
    noStroke();
    texture(stars);
    ellipsoid(1000, 1000, 1000, 75, 75);
  pop();

//lines help see where we are in axes
  push();
  stroke(250);
  translate(0, 0, -101);
  line(0, -150, 0, 150);
  line(-150, -100, 150, -100);
  line(-150, 100, 150, 100);
  pop();

  // ambientLight(60, 60, 60);
  directionalLight(55, 155, 255, 400, 0, 500);
    // pointLight(155, 55, 55, 0, 0, -100);

  // orbitControl();

//SHADOWS: beziers as "shadow" of moon overlayed onto "illuminated" shape
push();
rotate(c);

//phase 0 new

if (phase == 0){

push();
    ambientMaterial(250);
    beginShape();
      vertex(-100, -150, 40);
      bezierVertex(150, -105, 40, 150, 105, 40, -100, 150, 40);
      bezierVertex(-150, 105, 40, -150, -105, 40, -100, -150, 40);

    endShape(CLOSE)
  pop();
}


// phase 1
if (phase == 1){

 push();
     ambientMaterial(250);
    beginShape();
     vertex(-100, -150, 40);
     bezierVertex(126, -105, 40, 126, 105, 40, -100, 150, 40);
     bezierVertex(-126, 105, 40, -126, -105, 40, -100, -150, 40);

    endShape(CLOSE)
   pop();
}

  //Phase 2
if (phase == 2){
  push();
    ambientMaterial(250);
    beginShape();
     vertex(-100, -150, 40);
     bezierVertex(112, -105, 40, 112, 105, 40, -100, 150, 40);
     bezierVertex(-112, 105, 40, -112, -105, 40, -100, -150, 40);
    endShape(CLOSE)
   pop();
}

  //phase 3 waxing crescent ish
  if (phase == 3){
  push();
    ambientMaterial(250);
	  beginShape();
  	  vertex(-100, -150, 40);
  	  bezierVertex(100, -105, 40, 100, 105, 40, -100, 150, 40);
      bezierVertex(-100, 105, 40, -100, -105, 40, -100, -150, 40);
	  endShape(CLOSE)
   pop();
}

    //phase 4
if (phase == 4){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-90, -150, 40);
        bezierVertex(82, -105, 40, 82, 105, 40, -90, 150, 40);
        bezierVertex(-82, 105, 40, -82, -105, 40, -90, -150, 40);
      endShape(CLOSE)
    pop();
  }

  //phase 5 
if (phase == 5){
  push();
    ambientMaterial(250);
      beginShape();
        vertex(-80, -150, 40);
        bezierVertex(63, -105, 40, 63, 105, 40, -80, 150, 40);
        bezierVertex(-63, 105, 40, -63, -105, 40, -80, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 6
if (phase == 6){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-65, -150, 40);
        bezierVertex(46, -105, 40, 46, 105, 40, -65, 150, 40);
        bezierVertex(-46, 105, 40, -46, -105, 40, -65, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 7
if (phase == 7){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-40, -150, 40);
        bezierVertex(26, -105, 40, 26, 105, 40, -40, 150, 40);
        bezierVertex(-26, 105, 40, -26, -105, 40, -40, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 8 just over half til, 15 
    // should be first of waning
    if (phase == 8){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(45, -150, 40);
        bezierVertex(-150, -105, 40, -150, 105, 40, 45, 150, 40);
         bezierVertex(-35, 105, 40, -35, -105, 40, 45, -150, 40);
      endShape(CLOSE)
    pop();  
}

     //phase 9
if (phase == 9){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(75, -150, 40);
        bezierVertex(-150, -105, 40, -150, 105, 40, 75, 150, 40);
         bezierVertex(-60, 105, 40, -60, -105, 40, 75, -150, 40);
      endShape(CLOSE)
    pop();  
  }

      //phase 10
if (phase == 10){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(105, -150, 40);
        bezierVertex(-150, -105, 40, -150, 105, 40, 105, 150, 40);
         bezierVertex(-85, 105, 40, -85, -105, 40, 105, -150, 40);
      endShape(CLOSE)
    pop();
  }

      //phase 11
if (phase == 11){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(130, -150, 40);
        bezierVertex(-170, -105, 40, -170, 105, 40, 130, 150, 40);
        bezierVertex(-110, 105, 40, -110, -105, 40, 130, -150, 40);
      endShape(CLOSE)
    pop();
  }


    //phase 12
if (phase == 12){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(170, -150, 40);
        bezierVertex(-200, -105, 40, -200, 105, 40, 170, 150, 40);
        bezierVertex(-135, 105, 40, -135, -105, 40, 170, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 13
if (phase == 13){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(210, -150, 40);
        bezierVertex(-200, -125, 40, -200, 125, 40, 210, 150, 40);
        bezierVertex(-162, 125, 40, -162, -125, 40, 210, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 14 should be almost full
    if (phase == 14){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(210, -150, 40);
        bezierVertex(-200, -125, 40, -200, 125, 40, 210, 150, 40);
        bezierVertex(-175, 125, 40, -175, -125, 40, 210, -150, 40);
      endShape(CLOSE)
    pop();
  }

   //phase 15 should be just starting to wane, and bascially 14 but reversed along x axis
    if (phase == 15){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-210, -150, 40);
        bezierVertex(200, -125, 40, 200, 125, 40, -210, 150, 40);
        bezierVertex(175, 125, 40, 175, -125, 40, -210, -150, 40);
      endShape(CLOSE)
    pop();
  }

  //phase 16 is like 13
if (phase == 16){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-210, -150, 40);
        bezierVertex(200, -125, 40, 200, 125, 40, -210, 150, 40);
        bezierVertex(162, 125, 40, 162, -125, 40, -210, -150, 40);
      endShape(CLOSE)
    pop();
  }

    //phase 17 is like phase 12
if (phase == 17){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-170, -150, 40);
        bezierVertex(200, -105, 40, 200, 105, 40, -170, 150, 40);
        bezierVertex(135, 105, 40, 135, -105, 40, -170, -150, 40);
      endShape(CLOSE)
    pop();
  }

  //phase 18 is like phase 11
if (phase == 18){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-130, -150, 40);
        bezierVertex(170, -105, 40, 170, 105, 40, -130, 150, 40);
        bezierVertex(110, 105, 40, 110, -105, 40, -130, -150, 40);
      endShape(CLOSE)
    pop();
  }

      //phase 19 is like phase 10
if (phase == 19){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-105, -150, 40);
        bezierVertex(150, -105, 40, 150, 105, 40, -105, 150, 40);
         bezierVertex(85, 105, 40, 85, -105, 40, -105, -150, 40);
      endShape(CLOSE)
    pop();
  }

 //phase 20 is like phase 9
if (phase == 20){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-75, -150, 40);
        bezierVertex(150, -105, 40, 150, 105, 40, -75, 150, 40);
         bezierVertex(60, 105, 40, 60, -105, 40, -75, -150, 40);
      endShape(CLOSE)
    pop();  
  }

  //phase 21 is like phase 8
    if (phase == 21){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(-45, -150, 40);
        bezierVertex(150, -105, 40, 150, 105, 40, -45, 150, 40);
         bezierVertex(35, 105, 40, 35, -105, 40, -45, -150, 40);
      endShape(CLOSE)
    pop();  
}

//phase 22 is like phase 7
if (phase == 22){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(40, -150, 40);
        bezierVertex(-26, -105, 40, -26, 105, 40, 40, 150, 40);
        bezierVertex(26, 105, 40, 26, -105, 40, 40, -150, 40);
      endShape(CLOSE)
    pop();
  }

   //phase 23 is like phase 6
if (phase == 23){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(65, -150, 40);
        bezierVertex(-46, -105, 40, -46, 105, 40, 65, 150, 40);
        bezierVertex(46, 105, 40, 46, -105, 40, 65, -150, 40);
      endShape(CLOSE)
    pop();
  }

 //phase 24 is like phase 5 
if (phase == 24){
  push();
    ambientMaterial(250);
      beginShape();
        vertex(80, -150, 40);
        bezierVertex(-63, -105, 40, -63, 105, 40, 80, 150, 40);
        bezierVertex(63, 105, 40, 63, -105, 40, 80, -150, 40);
      endShape(CLOSE)
    pop();
  }

 //phase 25 is like phase 4
if (phase == 25){
    push();
    ambientMaterial(250);
      beginShape();
        vertex(90, -150, 40);
        bezierVertex(-82, -105, 40, -82, 105, 40, 90, 150, 40);
        bezierVertex(82, 105, 40, 82, -105, 40, 90, -150, 40);
      endShape(CLOSE)
    pop();
  }

   //phase 26 is like phase 3 
  if (phase == 26){
  push();
    ambientMaterial(250);
    beginShape();
      vertex(100, -150, 40);
      bezierVertex(-100, -105, 40, -100, 105, 40, 100, 150, 40);
      bezierVertex(100, 105, 40, 100, -105, 40, 100, -150, 40);
    endShape(CLOSE)
   pop();
}

//Phase 27 is like phase 2
if (phase == 27){
  push();
    ambientMaterial(250);
    beginShape();
     vertex(100, -150, 40);
     bezierVertex(-112, -105, 40, -112, 105, 40, 100, 150, 40);
     bezierVertex(112, 105, 40, 112, -105, 40, 100, -150, 40);
    endShape(CLOSE)
   pop();
}

// phase 28 is like phase 1
if (phase == 1){

 push();
     ambientMaterial(250);
    beginShape();
     vertex(-100, -150, 40);
     bezierVertex(126, -105, 40, 126, 105, 40, -100, 150, 40);
     bezierVertex(-126, 105, 40, -126, -105, 40, -100, -150, 40);

    endShape(CLOSE)
   pop();
}


pop();
}

// function drawMoon(size, color, phase){
//   //this code draws moons




// }

//rotating loop of many shapes
    // push();
     //  for (let x = width/15; x <= width/5; x = x * 1.02) {
     //      noStroke();
     //      rotate(radians(frameCount / 20));
     //      fill(200, 40);
     //      cone(x/2, x);
     //    }
    //  pop();

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