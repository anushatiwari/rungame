var player, playerAnimation
var background1, backgroundImage, ground
var rock1Image, rock2Image
function preload(){
  playerAnimation=loadAnimation("player1.png","player3.png","player2.png")
  backgroundImage=loadImage("background.png")
  rock1Image=loadImage("rock1.png")
  rock2Image=loadImage("rock2.png")
}
function setup() {
  createCanvas(800,400);
  background1=createSprite(400,290,1500,100)
  ground=createSprite(400,390,800,10)
  background1.addImage(backgroundImage)
  background1.scale=2.34
  player=createSprite(50, 345, 50, 50);
  player.addAnimation("player",playerAnimation)
  player.scale=.4
  ground.visible=false
}

function draw() {
  background(0);  
  background1.velocityX=-4
  if (background1.x<100){
    background1.x=background1.width/2
  }
  if (keyDown("space") && player.y>308){
    player.velocityY=-12
  }
  player.velocityY=player.velocityY+.5
  player.collide(ground)
  console.log(player.y)
  spawnRocks()
  drawSprites();
}

function spawnRocks(){
if (frameCount%120===0){
  var rock1 = createSprite(800,360,50,50)
  rock1.velocityX=-5
  var rand=Math.round(random(1,2))
  switch(rand){
    case 1:
      rock1.addImage(rock1Image)
      break;
    case 2:
      rock1.addImage(rock2Image)
      break;
    default: break;
  }
  rock1.scale=.21
  rock1.lifetime=170
}
}