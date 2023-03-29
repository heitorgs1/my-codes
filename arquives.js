//Images
let upRoad;
let upActor;
let upCar;
let upCar2;
let upCar3;

//Songs
let songTrail;
let songPoint;
let songCollided;

function preload() {
    upRoad = loadImage("images/road.png");
    upActor = loadImage("images/actor.png");
    upCar = loadImage("images/car-1.png");
    upCar2 = loadImage("images/car-2.png");
    upCar3 = loadImage("images/car-3.png");
    upCars = [upCar, upCar2, upCar3, upCar, upCar2, upCar3];

    songTrail = loadSound("songs/trail.mp3");
    songPoint = loadSound("songs/point.wav");
    songCollided = loadSound("songs/collided.mp3");
}