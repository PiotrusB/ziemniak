let potato = [];
let index = 0;
let lastChange = 0;
function preload() {
for(let i = 0; i < 9; i++) {
potato[i] = loadImage('ziemniaki/potato' + String(i) + '.jpg');
}
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
if(topHeight > windowHeight) {
resizeCanvas(windowWidth, topHeight);
}
textAlign(CENTER);
textSize(50);
}

function draw() {
background(0, 10, 150);
fill(0, 200, 200);
text("ziemniak", windowWidth/2, 50);
image(potato[index], 50, 100);
}

function mousePressed() {
if(millis() - lastChange > 700) {
let newIndex = int(random(0, 8));
while(1) {
if(newIndex != index) {break;}
else {
newIndex = int(random(0, 8));
}
}

index = newIndex;
}
lastChange = millis();
}
