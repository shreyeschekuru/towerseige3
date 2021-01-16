const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11,box12, box13, box14, box15, box16, box17, box18;
var slingshot, PolygonImage;
var score;

function preload(){
    PolygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    score = 0;

    ground = new Ground(450,380,900,40);

    stand1 = new Stand(700,150,250,15);
    stand2 = new Stand(400,250,250,15);

    box1 = new Box(330,225,30,40);
    box2 = new Box(360,225,30,40);
    box3 = new Box(390,225,30,40);
    box4 = new Box(420,225,30,40);
    box5 = new Box(450,225,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,165,30,40);

    box10 = new Box(630,125,30,40);
    box11 = new Box(660,125,30,40);
    box12 = new Box(690,125,30,40);
    box13 = new Box(720,125,30,40);
    box14 = new Box(750,125,30,40);
    box15 = new Box(660,95,30,40);
    box16 = new Box(690,95,30,40);
    box17 = new Box(720,95,30,40);
    box18 = new Box(690,65,30,40);

    ball = Bodies.circle(250,70,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:275,y:150});
    
    
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();

    textSize(20);
    fill("yellow");
    text("Score: " + score,770,350);

    textSize(20);
    fill("yellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",15,30);

    imageMode(CENTER)
    image(PolygonImage ,ball.position.x,ball.position.y,40,40);
  
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }