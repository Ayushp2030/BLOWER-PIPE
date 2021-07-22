const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;
var blower, blowermouth;
var button;


function setup() {
  createCanvas(800,400);

  ball = new Ball(400, 200, 50, 50);
  World.add(world, ball);

  blower = new Blower(350, 100, 50, 5);
  World.add(world, blower);

  blowermouth = new Blowermouth(350, 150, 100, 100);
  World.add(world, blowermouth);

  button = createButton("click to blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

ball.show();
blower.show();
blowermouth.show();

Engine.update(engine);
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x : 0, y : 0}, {x : 0, y : 0.05});

}