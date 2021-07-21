 var box;

 function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
 }

 function draw() 
 {
  background(30);
 
 if(keyDown(RIGHT_ARROW)){
 background("blue");
 }
 if(keyDown(LEFT_ARROW)){
   background("green");
 }
 
 if(keyDown(UP_ARROW)){
   background("red");
 }
 
 if(keyDown(DOWN_ARROW)){
   background("orange");
 }

 drawSprites();
 }