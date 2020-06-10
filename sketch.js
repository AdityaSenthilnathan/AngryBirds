const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,390,1200,20)

    box1 = new Box(750,350,50,50);
    box2 = new Box(550,350,50,50);
    pig1 = new Pig(650,350)
    log1 = new Log(650,325,250,PI/2)

    box3 = new Box(750,280,50,50);
    box4 = new Box(550,280,50,50);
    pig2 = new Pig(650,280)
    log2 = new Log(650,260,250,PI/2)

    box5 = new Box(650,220,50,50);
    bird1 = new Bird(1000,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
}