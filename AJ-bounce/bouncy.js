
function setup(){
    createCanvas(500,500);
    background(90);
}
var xPos = 50;
var yPos = 50;
var x = 4;
var y = 10;


function draw(){
    background(90);
    if(xPos < 25 || xPos > 475) x = -x;
    if(yPos < 25 || yPos > 475) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos,yPos,20,20);
    fill(random(130,250),random(130,250,),random(130,250));
}
