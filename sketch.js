let potato = [];
let index = 0;
let lastChange = 0;
function preload() {
for(let i = 0; i < 10; i++) {
potato[i] = loadImage('ziemniaki/potato' + String(i) + '.jpg');
}
}

function setup() {
createCanvas(windowWidth, windowHeight);
let topHeight = 0;
for(let i = 0; i < 10; i++) {
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
index = int(random(0, 10));
}

function draw() {
background(0, 10, 150);
fill(0, 200, 200);
text("ziemniak", windowWidth/2, 50);
image(potato[index], 50, 100);
}

function mousePressed() {
if(millis() - lastChange > 400) {
let newIndex = int(random(0, 10));
while(1) {
if(newIndex != index) {break;}
else {
newIndex = int(random(0, 10));
}
}

index = newIndex;
}
lastChange = millis();
}
