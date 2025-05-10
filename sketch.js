let potato = [];
function preload() {
potato[0] = loadImage('potato0.png');
potato[1] = loadImage('potato1.png');
potato[2] = loadImage('potato2.jpg');
potato[3] = loadImage('potato3.jpg');
potato[4] = loadImage('potato4.jpg');
potato[5] = loadImage('potato5.jpg');
potato[6] = loadImage('potato6.jpg');
potato[7] = loadImage('potato7.jpg');
potato[8] = loadImage('potato8.jpg');
}

function setup() {
createCanvas(1000, 1000);
background(0, 0, 0);
image(potato[int(random(0, 8))], 0, 0);
}

function draw() {

}
