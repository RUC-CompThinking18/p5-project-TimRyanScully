//Timothy Ryan Scully

/*
    JUMP PANEL

    This is a project I wanted to do for a long time, but never had the right skills for.
    P5 seemed the perfect platform for this, and the results hopefully reflect that.

    My idea was to present a web comic one panel at a time. Not so much in a
    series of webcomics with a single panel each connected with hyper links, but
    one big long comic with multiple panels being shared one at a time.

    I think I need to work on my drawing skills, but this little comic was built
    in less then a day, so you get what you give. I hope you at least get a
    kick out of the ending. SPOILER - it punishes the less then paitient :3.

    INSTRUCTIONS ARE ON README AND LIST THE FOLLOWING;

    UP ARROW    ->   FIRST PANEL
    LEFT ARROW  ->   NEXT PANEL
    RIGHT ARROW ->   PREVIOUS PANEL
    DOWN ARROW  ->   LAST PANEL-HANDLE WITH CARE.

*/
var h = 600; //height of Canvas
var w = 1400; //width of Canvas

var i = 0; //index of panels

function setup() {
  // put setup code here
  screen = createCanvas(w, h);// the canvas on screen


  panel = [loadImage("Panels/Panel-1.jpg"), //All the panels of the comic
           loadImage("Panels/Panel-2.jpg"),
           loadImage("Panels/Panel-3.jpg"),
           loadImage("Panels/Panel-4.jpg"),
           loadImage("Panels/Panel-5.jpg"),
           loadImage("Panels/Panel-6.jpg"),
           loadImage("Panels/Panel-7.jpg"),
           loadImage("Panels/Panel-8.jpg"),
           loadImage("Panels/Panel-9.jpg"),
           loadImage("Panels/Panel-10.jpg"),
           loadImage("Panels/Panel-11.jpg"),
           loadImage("Panels/Panel-12.jpg"),
           loadImage("Panels/Panel-13.jpg"),
           loadImage("Panels/Panel-14.jpg"),
           loadImage("Panels/Panel-15.jpg"),
           loadImage("Panels/Panel-16.jpg"),];

}

function draw() {
  // put drawing code here
  clear(); //erase everything!

  display = image(panel[i], 0, 0); //Draw the panel, using the index i.

  bh = h/3; //button height. since they are squares, it is also width.
  rightSide = w - bh - 2; //positioning the buttons on the right side of the canvas

  strokeWeight(4); //Make the borders dark and thick.
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
  triangle(100, 50, 50, 150, 150, 150);//up arrow
  triangle(150, 550, 50, 505, 150, 450);//left arrow
  //and right
  triangle(1350, 100, 1250, 50, 1250, 150);//right arrow
  triangle(1300, 550, 1250, 450, 1350, 450);//down arrow

  //very precise measurements...

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
