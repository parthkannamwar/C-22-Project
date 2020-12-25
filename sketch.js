const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld, ground;

var ball;

function setup() 
{
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  var goptions=
  {
    isStatic : true
  }

  ground=Bodies.rectangle(300,580,600,50,goptions);
  World.add(myworld,ground);
  console.log(ground);

  var boptions=
  {
    restitution : 1.0
  }

  ball=Bodies.circle(300,300,20,boptions);

  World.add(myworld,ball);
}

function draw()
{
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,600,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}