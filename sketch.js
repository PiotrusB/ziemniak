let potato = [];
function preload() {
for(let i = 0; i < 9; i++) {
potato[i] = loadImage("ziemniaki/potato" + String(i) + ".jpg");
}
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
let index = potato[int(random(9))];
}

function draw() {
image(index, 0, 0, width, height);
}
