const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myWorld, myEngine ;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ball= Bodies.rectangle(100,90,130,80);
  World.add(myWorld,ball)
  
}

function draw() {
  background(0);  
 Engine.update(myEngine);

 rectMode(CENTER);
 rect(ball.position.x,ball.position.y,130,80);

}