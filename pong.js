function setup() {
  createCanvas(1000, 600);
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
let xRacket = 5;
let yRacket = 240;
let wRacket = 8;
let hRacket = 110;
let collide = false;

//v racket 2
let xRacket2 = 985;
let yRacket2 = 240;

//v songs
let trail;
let racket;
let point;

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
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 10;
  }
}

function racketCollide(x, y) {
  collide =
  collideRectCircle(x, y, wRacket, hRacket, xBall, yBall, ray)
    if (collide) {
      speedXBall *= -1;
    }
}

function movimentRacket2() {
  yRacket2
}
