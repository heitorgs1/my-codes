function setup() {
  createCanvas(1000, 600);
  trail.loop();
}

function draw() {
  background(0);
  showBall();
  movimentBall();
  edgeCollide();
  showRacket(xRacket, yRacket);
  showRacket(xRacket2, yRacket2);
  movimentRacket();
  racketCollide(xRacket, yRacket);
  racketCollide(xRacket2, yRacket2);
  movimentRacket2();
  score();
  showScore();
  edgeBug();
}

//v ball
let xBall = 500;
let yBall = 300;
let diameter = 20;
let ray = diameter /2;

//v moviment ball
let speedXBall = 6;
let speedYBall = 6;

//v racket
let xRacket = 6;
let yRacket = 240;
let wRacket = 8;
let hRacket = 110;
let collide = false;

//v racket 2
let xRacket2 = 985;
let yRacket2 = 240;

//v score
let pointsP1 = 0;
let pointsP2 = 0;

function showBall() {
  circle(xBall, yBall, diameter)
}

function movimentBall() {
  xBall += speedXBall;
  yBall += speedYBall;
}

function edgeCollide() {
  if (xBall + ray > width || xBall - ray < 0) {
    speedXBall *= -1;
  }
  if (yBall + ray > height || yBall - ray < 0) {
    speedYBall *= -1;
  }
}

function showRacket(x, y) {
  rect(x, y, wRacket, hRacket)
}

function movimentRacket() {
  if (keyIsDown(87)) {
    yRacket -= 10;
  }
  if (keyIsDown(83)) {
    yRacket += 10;
  }
}

function racketCollide(x, y) {
  collide =
  collideRectCircle(x, y, wRacket, hRacket, xBall, yBall, ray)
    if (collide) {
      speedXBall *= -1;
      racket.play();
    }
}

function movimentRacket2() {
  if (keyIsDown(UP_ARROW)) {
    yRacket2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket2 += 10;
  }
}

function score() {
  if (xBall < 10) {
    pointsP1 += 1;
    point.play();
  }
  if (xBall > 990) {
    pointsP2 += 1;
    point.play();
  }
}

function showScore() {
  textAlign(CENTER);
  textSize(16);
  stroke(255);
  fill(color(255, 128, 0));
  rect(300, 5, 40, 20);
  fill(255);
  text(pointsP1, 320, 20);
  fill(color(255, 128, 0));
  rect(600, 5, 40, 20);
  fill(255);
  text(pointsP2, 620, 20);
}

function preload() {
  trail = loadSound("trail.mp3");
  racket = loadSound("racket.mp3");
  point = loadSound("point.mp3");
}

function edgeBug() {
  if (xBall - ray < 0) {
    xBall = 15;
  }
  if (xBall + ray > 1000) {
    xBall = 985;
  }
}