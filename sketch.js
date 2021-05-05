//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var phybody;



function setup() {
  createCanvas(1280,600);

  //creating my engine
  engine=Engine.create()
  //made my world
  world=engine.world;

  //lets make our own physical bodies
  //make bouncy ball
  var b_options={
    restitution:1
  }
  phybody=Bodies.circle(500,200,20,b_options);
  World.add(world,phybody);
  
  var gr_options={
    isStatic : true,
    friction : 0
  }

  ground=Bodies.rectangle(640,580,1280,20,gr_options);
  World.add(world,ground)


}

function draw() {

  Engine.update(engine);
  background(0);
  
  //rendering
  ellipseMode(RADIUS)
  ellipse(phybody.position.x,phybody.position.y,20,20)

  //rendering ground
  rectMode(CENTER)
  fill("green");
  rect(ground.position.x,ground.position.y,1280,20)
  
}