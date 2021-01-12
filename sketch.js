
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{																							
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//ground 
	g = new Ground(500,590,1000,20);

	//boy
	boy = new Boy(200,500,30,30);

	//tree
	tree = new Tree(900,400,50,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  g.display();
  boy.display();
  tree.display();
  drawSprites();
 
}



