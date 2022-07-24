var smallforward=0



function preload(){
//startbutton
startnowImg=loadImage("startnow.png")

//small foward position
sfImg=loadImage("sf.png")

//choose position question
choosepositionImg=loadImage("chooseposition.png")


}

function setup(){
  createCanvas(375,667);
  background("blue");

startnow=createSprite(180,500)
startnow.addImage(startnowImg)
startnow.scale=1
startnow.setCollider("rectangle", 7, -5, 345, 70, 0);

smallforward=createSprite(220,400)
smallforward.addImage(sfImg)
smallforward.scale=0 //1.5
smallforward.debug=true
smallforward.setCollider("rectangle", -25, -22, 100, 70, 0);



chooseposition=createSprite(190,200)
chooseposition.addImage(choosepositionImg)
chooseposition.scale=0 //.7

 
}

function draw() {
  background("teal");
 



 
  textSize(50)
  fill(00,990,50)
  text(mouseX + "," +mouseY , mouseX, mouseY)



  drawSprites();
  rightafterstartnow()
}
function rightafterstartnow(){
  if(mousePressedOver(startnow)){
startnow.scale=0
smallforward.scale=1.5
chooseposition.scale=.38
  }
  if(mousePressedOver(smallforward)){
    smallforward.y=40
    smallforward.x=40
    smallforward.scale=0.5

  chooseposition.scale=0
  }

}

