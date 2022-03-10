
function preload(){
    
  tigerRunning=loadAnimation("./tiger/tile000.png","./tiger/tile001.png","./tiger/tile002.png","./tiger/tile003.png","./tiger/tile004.png","./tiger/tile005.png","./tiger/tile006.png","./tiger/tile007.png")
 
  rockImg=loadImage("rock.png")
  bgImg=loadImage("bg.png")
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");
  }
function setup() {
  createCanvas(600,400);
  bg = createSprite(300,200,600,400)
 bg.addImage(bgImg)

  tiger=createSprite(70,290,20,50)
 tiger.addAnimation("running",tigerRunning)
 
}

function draw() {
  background(0);  
  
  drawSprites();
}