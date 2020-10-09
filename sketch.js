const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2;
var Ground;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
    
  }

  box2 = Bodies.rectangle(200,200,40,40);
  World.add(world,box2);
  Ground = Bodies.rectangle(601,589,1200,40,options);
  World.add(world,Ground);
 console.log(Ground);
}
  

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box2.position.x, box2.position.y,40,40);
  rect(Ground.position.x, Ground.position.y,1200,60);
}