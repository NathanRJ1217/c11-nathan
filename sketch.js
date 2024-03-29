var nave,nave_moving;
var sea,sea_image;

function preload(){
nave_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,400,600,10);
  sea.addImage("image",sea_image);
  sea.x = sea.width /2;
  sea.velocityX = -5;
  sea.scale = 0.5;
  sea.y = 50;
  sea.x = 500;

  nave = createSprite (200,190,20,50);
  nave.addAnimation("moving",nave_moving);
  
  nave.scale = 0.5;
  nave.x = 200;
  nave.y = 210;
}

function draw() {
  background("blue");
  if (sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites()
}