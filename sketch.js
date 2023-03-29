function setup() {
  createCanvas(800, 600);
  songTrail.loop();
}

function draw() {
  background(upRoad);
  showActor();
  movimentActor();
  showCars();
  movimentCars();
  loopCars();
  finishRoad();
  collisionCar();
  showScore();
  markScore();
  positiveScore();
  canBack();
}