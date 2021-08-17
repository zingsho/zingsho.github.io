
var canvas1;
let mover;

function setup() {
  canvas1 = createCanvas(windowWidth, windowHeight);
  canvas1.position(0, 0);
  canvas1.style('z-index', '-1');
   mover=new Mover();

  }
  //background(225);
  



function draw() {
background(225,10);
push();
bgtiles();
pop();

mover.update();
mover.show();




}


function bgtiles(){
  
  for(var x=0; x<width;x+=20){
   for(var y=0; y<height; y+=20){
     //noStroke();
    strokeWeight(2);
    stroke(225,10);
     //fill(20,10);
   
     rect(x,y,20);
   }
 }

}