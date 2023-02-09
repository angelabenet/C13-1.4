var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello "+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space") && trex.y >= 100) {
    trex.velocityY = -14;
  }
  
  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {

  if (frameCount % 60 === 0) {
    cloude = createSprite(600,100,40,10);
    cloude.addImage(cloudImage);

    cloude.velocityX = -3;

    cloude.depth = trex.depth
    trex.depth = trex.depth + 1;
    
    }
}

