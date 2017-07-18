
function setup(){
    createCanvas(600,600);
    background(229, 227, 227);
    //var rekt = rect(250,250,30,20); 
    //ellipse(300,300,400,400);
}

function mouseDragged(){
  ellipse(mouseX, mouseY,random(50),random(50));

fill(random(200),random(200), random(200));
}
