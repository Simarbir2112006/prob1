 var World = Matter.World;
 var Bodies = Matter.Bodies;
 var Engine = Matter.Engine;

 var engine , world ;

 var player1

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;

  player1 = new Player(100,200);
}

function draw() {
  background("black");  
  Engine.update(engine);

  player1.display();

 
}