
var END1;
var END2;
var PLAY;
var gameState = "inst";
var tries = 3;

function preload() {

gameImage = loadImage("PROJECT46 PICTURE.webp");

}

function setup() {
  createCanvas(400,400);

  
}

function draw() {

  background(69,196,194);

  console.log(gameState)
  
  if(gameState === "inst") {

    fill(255);
    textSize(30);
    text("Welcome!",130,100);
    textSize(20);
    text("To win the game, click on the",70,150);
    text("hidden turtle in the picture",80,190)
    text("You get three tries!",110,230)
    textSize(30);
    text("Press Space to Start!",60,280);


    if(keyDown("space") && gameState === "inst") {

      gameState = PLAY;

    }

  }

  if(gameState === PLAY) {

    fill(250);
    textSize(30)
    text("Tries: " + tries,300,30);

    turtle = createSprite(72,340,25,25);
    turtle.visible = false;

    imageMode(CENTER)
    image(gameImage,200,200,400,400);

   /* if(mousePressedOver(turtle)) {

      gameState = END1;

    }
    
    //ask to review how to store mouse clicked coordinates in arrays

    */
    
  }

  /*if(gameState === END1) {

    strokeWeight(4);
    stroke("red")
    noFill();
    ellipse(72,340,55,55);

    fill(255);
    stroke(69,196,194)
    textSize(40);
    text("You Win!",120,200);

  }*/

  if(gameState === END2) {

    fill(255);
    stroke(69,196,194)
    strokeWeight(4)
    textSize(30);
    text("You Lost",140,100);
    text("The turtle is in the red",60,160)
    text("circle at the bottom left",50,200)
    text("Thanks for Playing!",70,240)

  }

  drawSprites();
}