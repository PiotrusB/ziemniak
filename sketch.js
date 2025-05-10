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
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(255, 255, 255);
let topHeight = 0;
for(let i = 0; i < 9; i++) {
potato[i].resize(windowWidth-100, 0);
if(potato[i].height > topHeight) {
topHeight = potato[i].height;
}
}
resizeCanvas(windowWidth, topHeight);
textAlign(CENTER);
textSize(50);
}

function draw() {
background(0, 10, 150);
fill(255, 255, 255);
rect(50, 100, windowWidth-100, windowHeight-100);
fill(0, 200, 200);
text("ziemniak", windowWidth/2, 50);
image(potato[index], 50, 100);
}

function mousePressed() {
let newIndex = int(random(0, 8));
while(1) {
if(newIndex != index) {break;}
else {
newIndex = int(random(0, 8));
}
}
index = newIndex;
let time = millis();
while(millis() - time > 100);
}
