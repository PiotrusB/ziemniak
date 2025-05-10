let potato = [];
function preload() {
for(let i = 0; i < 9; i++) {
potato[i] = loadImage("ziemniaki/potato" + String(i) + ".jpg");
}
}

function setup() {
createCanvas(1000, 1000);
background(0);
let index = potato[int(random(9))];
}

function draw() {
image(potato[index], 0, 0);
}
