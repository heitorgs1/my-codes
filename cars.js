let xCars = [850, 850, 850, 850, 850, 850];
let yCars = [65, 150, 230, 320, 400, 480];
let speedCars = [3, 4, 4.5, 5, 4.3, 3];

function showCars() {
    for (let i = 0; i < upCars.length; i++) {
        image(upCars[i], xCars[i], yCars[i], 60, 50);
    }
}

function movimentCars() {
    for (let i = 0; i < upCars.length; i++) {
        xCars[i] -= speedCars[i];
    }
}

function loopCars() {
    for (let i = 0; i < upCars.length; i++) {
        if (finishRoad(xCars[i])) {
            xCars[i] = 850;
        }
    }
}

function finishRoad(xCar) {
    return xCar < - 50;
}