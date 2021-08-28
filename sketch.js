const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground();
    stand = new Stand(390,300,250,10)
    block1 = new Block(370,290,20,50)
}
function draw(){
    background(56,44,44)
    Engine.update(engine)
    ground.display()
    stand.display()
    block1.display()
}




