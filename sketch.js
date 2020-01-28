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

translate(0, 0, -50)
ellipse(200, 200, 100, 100)

noFill();
    translate(width/2, height/2);
    for (let x = width/10; x >= width/20; x = x / 1.08) {
        rotate(radians(frameCount / 2));
        noStroke();
        fill(200, 40);
        ellipse(0, 0, x, x);
        // cone(x/2, x);
      }
}
