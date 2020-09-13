
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,20,30,option);
  World.add(world,ground);
  var option = {
    restitution : 1
  }
  ball = Bodies.circle(200,200,20,option);
  World.add(world,ball);
}

function draw() {
  background('black');  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}