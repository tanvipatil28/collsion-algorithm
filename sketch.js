
var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 50, 50);
  movingRect .shapeColor="red";
  movingRect .debug=true;

}






function draw() {
  background(255,255,255);  
movingRect.x=mouseX;
movingRect.y=mouseY;
if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
{
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="pink";
}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
  drawSprites();
}