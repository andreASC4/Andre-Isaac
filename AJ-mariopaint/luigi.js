
function setup(){
    createCanvas(600,600);
    background(229, 227, 227);
    //var rekt = rect(250,250,30,20); 
    //ellipse(300,300,400,400);
}
function mouseDragged(){
   for(var i =0; i<100; i++){
     var r = random(50);
     stroke(r*5);
     line(50,i,50+r,i);
 }   
  rect(mouseX, mouseY,60,50);
}
