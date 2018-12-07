//Timothy Ryan Scully


var h = 600; //height of Canvas
var w = 1400; //width of Canvas

var i = 0; //index of panels

function setup() {
  // put setup code here
  screen = createCanvas(w, h);

  panel = [loadImage("Panels/spoon-boy.jpg"),
           loadImage("Panels/Coding.jpg"),
           loadImage("Panels/IMG_0855.jpg"),
           loadImage("Panels/matrix_code_animation.gif")];

}

function draw() {
  // put drawing code here
  clear();

  display = image(panel[i], 0, 0);

  bh = h/3; //button height. since they are squares, it is also width.
  rightSide = w - bh - 2; //positioning the buttons on the right side of the canvas

  strokeWeight(4);
  fill(255);

  //buttons on the left of me,
  firstPanelB = rect(0, 0, bh, bh); //B stands for button
  compassPanelB = rect(0, bh, bh, bh);//useless for now. will utilize in future projects
  previousPanelB = rect(0, (2 * bh), bh, bh);

  //jokers... I mean, BUTTONS on the right (and here I am; stuck in the middle with you... :3)
  nextPanelB = rect(rightSide, 0, bh, bh);
  menuPanelB = rect(rightSide, bh, bh, bh); //also useless. For now.
  lastPanelB = rect(rightSide, (2 * bh), bh, bh);

  //triangles for the buttons on the left
  fill(0);
  triangle(100, 50, 50, 150, 150, 150);
  triangle(150, 550, 50, 505, 150, 450);
  //and right
  triangle(1350, 100, 1250, 50, 1250, 150);
  triangle(1300, 550, 1250, 450, 1350, 450);

  //very precise measurements.

}

function mouseClicked() {
//All my interaction in one place :3c

  if (mouseX > w - bh && mouseY < bh && i != panel.length - 1) //position of nextPanelB. Goes to next panel
    i++;
  else if (mouseX < bh && mouseY > 2*bh && i != 0)// position of previousPanelB. Goes to previous panel.
    i--;
  else if (mouseX > w - bh && mouseY > 2*bh)// last panel
    i = (panel.length - 1);
  else if (mouseX < bh && mouseY < bh) // first panel!
    i = 0;


}
