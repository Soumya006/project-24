
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1,stone2,stone3, iron1,iron2,rubber1,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6;

function setup() {
	createCanvas(1000, 500);

  engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,height,1200,20)

  iron1 = new iron(200,450,50,50);
	iron2 = new iron(500,450,50,50);
	stone1= new stone(800,470,10,10);
	stone2= new stone(100,470,10,10);
	stone3= new stone(600,470,10,10);
	rubber1 = new rubber(550,450,40);
	sand1 = new sand(200,400,6);
  sand2 = new sand(205,400,6);
  sand3 = new sand(210,400,6);
  sand4 = new sand(215,400,6);
  sand5 = new sand(200,410,6);
  sand6 = new sand(200,415,6);
	hammer = new Hammer(400,375,10,50);
}


function draw() {
  background("lightblue");

  Engine.update(engine);
  
  plane.display();
  iron1.display();
  iron2.display();
  stone1.display();
  stone2.display();
  stone3.display();
  rubber1.display();
  sand1.display();
  sand2.display(); 
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  hammer.display();
 
}



