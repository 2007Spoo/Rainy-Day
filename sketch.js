
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops;  
var maxdrops= 100;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
drops= new Drops(200, 300, 4);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drops.display();
  drawSprites();
 
}



