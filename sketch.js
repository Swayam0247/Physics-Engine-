const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var box, slingShot;

//Goal of the game: to drop the box on to the line

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    log1 = new Log(1100,260,300, PI/2);
    box = new Box(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(box.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    log1.display();
    box.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
    slingshot.attach(box.body)
    }
}