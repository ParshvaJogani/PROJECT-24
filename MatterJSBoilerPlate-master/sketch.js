const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var circle1,circle2,circle3,circle4,circle5;
var cons
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

    var ball_option ={
		isStatic: true,
		friction: 0.5,
		density: 1.2
	}
	circle1 = Bodies.circle(250,500,100,ball_option);
	circle2 = Bodies.circle(350,500,100,ball_option);
	circle3 = Bodies.circle(450,500,100,ball_option);
	circle4 = Bodies.circle(550,500,100,ball_option);
	circle5 = Bodies.circle(650,500,100,ball_option);
	
	var ground_option = {
		isStatic: true,
		density: 1.2
	}
	ground = Bodies.rectangle(450,150,1000,20,ground_option);

	cons = Constraint.create(circle1.x,circle1.y,ground.x,ground.y);

	Engine.run(engine);
	World.add(world,circle1);
	World.add(world,circle2);
	World.add(world,circle3);
	World.add(world,circle4);
	World.add(world,circle5);
	World.add(world,ground);
  
}


function draw() {
  rectMode(CENTER);
   background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,450,20);
  ellipseMode(RADIUS);
  ellipse(circle1.position.x,circle1.position.y,50,50);
  ellipse(circle2.position.x,circle2.position.y,50,50);
  ellipse(circle3.position.x,circle3.position.y,50,50);
  ellipse(circle4.position.x,circle4.position.y,50,50);
  ellipse(circle5.position.x,circle5.position.y,50,50);
  
  drawSprites();
 
}



