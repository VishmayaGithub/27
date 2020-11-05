const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	bob1= new Bob(200,400);
	bob2 = new Bob(600,400);
  bob3 = new Bob(400,400)
  bob4 = new Bob(800,400)
  bob5 = new Bob(0,400)
	rope1 = new Rope(bob1.body,roof.body,{x:140,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:240,y:20});
	rope3 = new Rope(bob3.body,roof .body,{x:190,y:20})
  rope4 = new Rope(bob4.body,roof .body,{x:310,y:20})
  rope5 = new Rope(bob5.body,roof .body,{x:60,y:20})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  roof.display();
  bob2.display();
  bob1.display();
rope1.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display()
  rope4.display()
  bob5.display()
  rope5.display()
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:-95});

	}
}
