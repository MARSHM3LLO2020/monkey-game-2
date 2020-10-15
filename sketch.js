
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 
var ground
function preload(){
  
  
  var survivaltime=0;
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(600,300);
  ground = createSprite(300,270,600,15);
  ground.x=ground.width/2;
  
   

  monkey = createSprite(100,239,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  invisibleground = createSprite(300,269,600,4);
}

function draw() {
    background("white");
  if(keyDown("space")&& monkey.y >= 160) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 1;
    monkey.collide(invisibleground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
   text("survivaltime:"+survivaltime,100,50);
  
spawnFood();
spawnRocks();
drawSprites();
}

function spawnRocks(){
  if(frameCount%300===0){
     obstacle = createSprite(600,258,20,10);
     obstacle.addImage("ob",obstacleImage);
     obstacle.velocityX=-3;
    obstacle.scale=0.2;
    obstacle.lifetime=200
     }
}

function spawnFood(){
  if(frameCount%80===0){
     banana = createSprite(600,200,20,20);
     banana.addImage("b",bananaImage);
     banana.velocityX=-3;
    banana.y=Math.round(random(120,200));
    banana.scale=0.1
    banana.lifetime=200;
  }
}
  






