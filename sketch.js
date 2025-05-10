let potato = [];
let index = 0;
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
for(let i = 0; i < 9; i++) {
potato[i].resize(windowWidth, 0);
}
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(255, 0, 0);
}

function draw() {
// let newIndex = random(0, 8);
// while(1) {
// if(newIndex != index) {break;}
// else {
// newIndex = random(0, 8);
// }
// }
image(potato[index], 0, 0);
}
