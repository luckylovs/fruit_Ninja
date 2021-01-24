//Game States
var PLAY=1;
var END=0;
var gameState=1;
var fruit1,fruitImage1,fruitG1;
var fruit2,fruitImage2,fruitG2;
var fruit3,fruitImage3,fruitG3;
var fruit4,fruitImage4,fruitG4;
var alien1,alienImage1,alienG1;
var alien2,alienImage2,alienG2;
var gameOver,gameOverImage
var knife;
var knifeImage ;
var gameOverSound,knifeSound;

function preload(){
  
  knifeImage = loadImage("knife.png");
  alienImage1 = loadImage("alien1.png");
  alienImage2 = loadImage("alien2.png");
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
fruitImage3 = loadImage("fruit3.png");
fruitImage4 = loadImage("fruit4.png");
gameOverImage = loadImage("gameover.png");
 gameOverSound = loadSound("gameover.mp3") ;
  knifeSound = loadSound("knifeSwoosh.mp3");

}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  gameOver = createSprite(300,300,10,10);
  gameOver.addImage("gameOver",gameOverImage)
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  alienG1 = new Group();
  alienG2 = new Group();
  fruitG1 = new Group();
  fruitG2= new Group();
  fruitG3= new Group();
  fruitG4 = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    if(knife.isTouching(fruitG1)){
      fruitG1.destroyEach();
      score = score+1
       knifeSound.play();
    }
     if(knife.isTouching(fruitG2)){
      fruitG2.destroyEach();
      score = score+1
       knifeSound.play();
    }
     if(knife.isTouching(fruitG3)){
      fruitG3.destroyEach();
      score = score+1
        knifeSound.play();
    }
     if(knife.isTouching(fruitG4)){
      fruitG4.destroyEach();
      score = score+1
        knifeSound.play();
    }
    if(knife.isTouching(alienG1)){
      gameState = END;
      alienG1.destroyEach();
      knife.destroy();
    }
     if(knife.isTouching(alienG2)){
      gameState = END;
      alienG2.destroyEach();
      knife.destroy();
    }
    
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
    if(frameCount % 50 === 0){
    var fruit1 =createSprite(200,100,1,1)
    fruit1.addImage("move", fruitImage1)
      fruit1.x =Math.round(random(1,300))
    fruit1.scale =0.3;
    fruit1 .velocityY =(3+1.5*score/5);
    fruit1.lifetime= 90;
    fruitG1.add(fruit1);
  }
  
   if(frameCount % 50 === 0){
    var fruit2 =createSprite(200,100,1,1)
    fruit2.addImage("move", fruitImage2)
      fruit2.x =Math.round(random(1,300))
    fruit2.scale =0.3;
    fruit2 .velocityY =(3+1.5*score/5);
    fruit2.lifetime= 90;
    fruitG2.add(fruit2);
  }
   if(frameCount % 50 === 0){
    var fruit3 =createSprite(200,100,1,1)
    fruit3.addImage("move", fruitImage3)
      fruit3.x =Math.round(random(1,300))
    fruit3.scale =0.3;
    fruit3 .velocityY =(3+1.5*score/5);
    fruit3.lifetime= 90;
    fruitG3.add(fruit3);
  }
   if(frameCount % 50 === 0){
    var fruit4 =createSprite(200,100,1,1)
    fruit4.addImage("move", fruitImage4)
      fruit4.x =Math.round(random(1,300))
    fruit4.scale =0.1;
    fruit4 .velocityY =(3+1.5*score/5);
    fruit4.lifetime= 90;
    fruitG4.add(fruit4);
  }
  
   if(frameCount % 50 === 0){
    var alien1 =createSprite(200,100,1,1)
    alien1.addImage("move", alienImage1)
     alien1.x =Math.round(random(1,300))
   alien1.scale =0.6;
    alien1 .velocityY =(3+1.5*score/5);;
   alien1.lifetime= 90;
    alienG1.add(alien1);
  }
   if(frameCount % 50 === 0){
    var alien2=createSprite(200,100,1,1)
    alien2.addImage("move", alienImage2)
    alien2.x =Math.round(random(1,300))
    alien2.scale =0.6;
    alien2 .velocityY =(3+1.5*score/5);;
    alien2.lifetime= 90;
   alienG2.add(alien2);
  }   
  
 gameOver .visible = false;

  }
  if(gameState === END){
   gameOver.visible = true;
    gameOverSound.play();
      fruitG1.setLifetimeEach(-1);
   fruitG2.setLifetimeEach(-1);
    fruitG3.setLifetimeEach(-1)
    fruitG4.setLifetimeEach(-1)
      fruitG1.setVelocityYEach(0);
    fruitG2.setVelocityYEach(0);
    fruitG3.setVelocityYEach(0);
    fruitG4.setVelocityYEach(0);
    alienG1.setVelocityYEach(0);
    alienG2.setVelocityYEach(0);
     alienG1.setLifetimeEach(-1)
     alienG2.setLifetimeEach(-1)
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
