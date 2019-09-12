var kleur;
var kwast;

function setup() {
  createCanvas(1280, 700);
  tekenEmojis();

  kleur = color(0,0,0);
  kwast = 15;
}

function draw() {

  if (mouseIsPressed) {
    fill(kleur);
    noStroke();
    ellipse(mouseX, mouseY, kwast, kwast);
  }

}


function tekenEmojis() {

  noFill();
  stroke(0);
  strokeWeight(7);

  // emoji 1
  ellipse(380, 150, 250, 250);
  arc(380, 160, 150, 150, 0, PI, PIE);
  fill(255);
  arc(380, 185, 60, 150, 0, PI, PIE);
  noFill();
  ellipse(425, 100, 60, 60);
  arc(340, 125, 60, 60, 10, 5.7, HALF_PI);
  strokeWeight(3);
  ellipse(425, 100, 20, 20);
  strokeWeight(7);

  // emoji 2
  ellipse(950, 150, 250, 250);
  arc(950, 170, 150, 150, 0, PI, PIE);
      // heart eye 1
      arc(880, 95, 40, 40, 2.3, 6.2, PI + QUARTER_PI, CHORD);
      arc(920, 95, 40, 40, 3.2, 6.9, PI + QUARTER_PI, CHORD);
      strokeJoin(MITER);
      beginShape();
        vertex(865, 108);
        vertex(900, 140);
        vertex(935, 108);
      endShape();
      // heart eye 2
      arc(980, 95, 40, 40, 2.3, 6.2, PI + QUARTER_PI, CHORD);
      arc(1020, 95, 40, 40, 3.2, 6.9, PI + QUARTER_PI, CHORD);
      strokeJoin(MITER);
      beginShape();
        vertex(965, 108);
        vertex(1000, 140);
        vertex(1035, 108);
      endShape();

  // emoji 3
  ellipse(380, 450, 250, 250);
  arc(380, 460, 150, 150, 0, PI, PIE);
  line(313, 485, 450, 485);
      // tear eye 1
      arc(340, 430, 60, 60, 10, 5.7, HALF_PI);
      arc(325, 425, 60, 90, 10, 5, HALF_PI);
      arc(280, 450, 40, 40, 0.5, 4, PI + QUARTER_PI, CHORD);
      strokeJoin(MITER);
      beginShape();
        vertex(265, 435.5);
        vertex(305, 425);
        vertex(297, 460);
      endShape();
      // tear eye 2
      arc(420, 430, 60, 60, 10, 5.7, HALF_PI);
      arc(440, 425, 60, 90, 10.8, 5.8, HALF_PI);
      arc(480, 450, 40, 40, -0.7, 2.4, PI + QUARTER_PI, CHORD);
      strokeJoin(MITER);
      beginShape();
        vertex(464, 462);
        vertex(455, 425);
        vertex(494, 434.8);
      endShape();
  // emoji 4
  ellipse(950, 450, 250, 250);
  ellipse(950, 500, 80, 80);
  strokeWeight(3);
  ellipse(950, 525, 50, 25);
  strokeWeight(7);
      //eye 1
      line(880, 380, 930, 430);
      line(930, 380, 880, 430);
      //eye 2
      line(970, 380, 1020, 430);
      line(1020, 380, 970, 430);


}

function changeColor(R, G, B, buttonClick) {

  var buttons = document.getElementsByClassName('button');
  for ( var i=0; i < buttons.length; i++ ) {
    if ( buttons[i].classList.contains('active') ) {
      buttons[i].classList.remove('active')
    }
  }
  buttonClick.classList.add('active');

  kleur = color(R,G,B);

}

function changeBrush(S, buttonClick) {

  var buttons = document.getElementsByClassName('Sbutton');
  for ( var i=0; i < buttons.length; i++ ) {
    if ( buttons[i].classList.contains('active') ) {
      buttons[i].classList.remove('active')
    }
  }
  buttonClick.classList.add('active');

  kwast = S;

}
