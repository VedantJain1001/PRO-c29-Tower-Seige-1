const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {

  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  //Stand to support blocks and ground to not let polygon fall for infinite time
  stand1 = new Stand(390,300,250,10);
  ground = new Ground();

  //Polygon
  polygon = new poly(150,130,50,50);

  //Launcher
  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  //The Blocks to destroy
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
}

function draw() {
  background(56,44,44); 
  fill('black');
  textSize(24);
  text("Press SPACE to get a second chance to play", 100,50);  
 
  
  fill(188,67,67);

  //Stand, Ground, Polygon and launcher displayed
  stand1.display();
  ground.display(); 
  launcher.display();
  polygon.display(); 

  //Displaying Blocks with different color
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  
  drawSprites();
}



//Dragging and Releasing code
function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}
function mouseReleased()  {
  launcher.fly()
}


//Pressing SPACE key to reset the launcher and polygon
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:150, y:130});
    launcher.attach(polygon.body);
  }
}