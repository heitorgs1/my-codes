let xActor = 150;
let yActor = 555;
let collide = false;
let myPoints = 0;

function showActor() {
    image(upActor, xActor, yActor, 35, 35);
}

function movimentActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (canBack()) {
        yActor += 3;
        }
    }
}

function collisionCar() {
    for (let i = 0; i < upCars.length; i++) {
        collide = collideRectCircle(xCars[i], yCars[i], 60, 50, xActor, yActor, 30);
            if (collide) {
                yActor = 555;
                songCollided.play();
            if (positiveScore()) {
                myPoints -= 1;
            }
        }
    }
}

function showScore() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 50));
    text(myPoints, 168, 35);
}

function markScore () {
    if (yActor < 35) {
        myPoints += 1;
        songPoint.play();
        yActor = 555;
    }
}

function positiveScore() {
    return myPoints > 0;
}

function canBack () {
    return yActor < 555;
}