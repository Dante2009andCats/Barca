var Sea,Ship
var Seaimg,Shipimg
function preload(){
Seaimg= loadImage("sea.png");
Shipimg= loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  Sea= createSprite(400,200);
  Sea.addImage(Seaimg);
  Sea.scale= 0.3
  Ship= createSprite(130,200,30,30);
  Ship.addAnimation("movingship",Shipimg);

  Ship.scale=0.25
}

function draw() {
  background("blue");
  Sea.velocityX=-3
  if(Sea.x < 0){
    Sea.x = Sea.width/2


  }

 drawSprites();
}