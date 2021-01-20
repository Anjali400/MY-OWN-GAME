const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bgi1,bgi2;
var button,butimg;
var jacky,bird,birdsGroup;
var sound,sound2;

function preload(){
bgi1=loadImage("bg1.jpg")
jackimg=loadImage("p.png")
bgi2=loadImage("bg2.jpg")
bird=loadImage("bird.png")
sound=loadSound("g.mp3")
sound2=loadSound("sound.mp3")
}
function setup() {
 
  createCanvas(1300,545);
  engine = Engine.create()
  world = engine.world;
 

  

bg1=createSprite(600,300,1300,600)
bg1.addImage("bg",bgi1)
bg1.scale=1.3

bg2=createSprite(600,10,1200,600)
bg2.addImage("bg",bgi2)
bg2.scale=1.3
bg2.visible=false

jacky=createSprite(600,300)
jacky.addImage("jack",jackimg)
jacky.scale=0.2;
jacky.visible=false


button=createButton("PLAY")

birdsGroup=createGroup()
}



function draw() {
  Engine.update(engine);

  background("white");  

 spawnbirds()
 

  //moving background
  bg2.velocityX = -10

  //making background as never ending background
  if (bg2.x < 0){
    bg2.x = bg2.width/2;
  }
  
  button.position(600,300)

 

  //giving condition for moving jacky 
  if(keyDown("UP_ARROW")){
    jacky.velocityY=-12 
  }

  if(keyDown("DOWN_ARROW")){
    jacky.velocityY=+12  
  }


  button.mousePressed(()=>{
    sound2.play()
    jacky.visible=true
bg2.visible=true
bg1.visible=false
button.hide()
sound.play()
birdsGroup.visible=true

})
drawSprites()
}


function spawnbirds() {
  
  if (frameCount % 200 === 0) {
    var birds = createSprite(1000,160,40,10);
    birds.y = Math.round(random(80,120));
    birds.addImage(bird);
    birds.scale = 0.02;
    birds.velocityX = -3;
    birds.lifetime = 400;
    
     birdsGroup.add(birds);
  }
}