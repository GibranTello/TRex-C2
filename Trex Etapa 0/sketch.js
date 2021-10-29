
var trex,trex_running;
var edges;
var ground, groundimage;
var invisibleground;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundimage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50;
  ground = createSprite(220,180,400,20);
  ground.addImage("ground", groundimage);
  ground.velocityX = -4;
  invisibleground = createSprite(200,190,400,10);
  invisibleground.visible = false
  ground.depth=trex.depth;
  trex.depth=trex.depth+1;
}

function draw(){
  background(150);
  
  console.log(trex.y);
  if(keyDown("space") && trex.y >=150){
    trex.velocityY=-10
  }

  if(ground.x < 0){
  ground.x = ground.width/2}


  trex.velocityY= trex.velocityY + 0.5
  trex.collide(invisibleground);
  drawSprites()
}

