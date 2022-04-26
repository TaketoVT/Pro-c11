var shipImg,ship;
var seaImg,sea;
function preload(){
shipImg = loadAnimation("ship-1.png" ,"ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite (200,170,200,200);
  sea.addImage(seaImg);
  

  ship = createSprite (100,160,20,50);
  ship.addAnimation("barco",shipImg);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
  drawSprites();
}