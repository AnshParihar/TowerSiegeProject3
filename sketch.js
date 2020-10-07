const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var score
var Bg

function preload(){
  getTimeForBgImg();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  score = 0
  ground = new Ground(400,380,800,20)
  platform1 = new Ground(350,300,150,10)
  platform2 = new Ground(600,200,150,10)
  box1 = new Box(350,275,40,40)
  box2 = new Box(310,275,40,40)
  box3 = new Box(390,275,40,40)
  box4 = new Box(330,235,40,40)
  box5 = new Box(370,235,40,40)
  box6 = new Box(350,195,40,40)
  box7 = new Box(600,175,40,40)
  box8 = new Box(560,175,40,40)
  box9 = new Box(640,175,40,40)
  box10 = new Box(580,135,40,40)
  box11 = new Box(620,135,40,40)
  box12 = new Box(600,95,40,40)
  ball = new Ball(130,100,20)
  slingshot = new SlingShot(ball.body,{x:130,y:100})
}

function draw() {
  if(Bg!=null){
    background(Bg)
  }
  Engine.update(engine)
  fill("white")
  textSize(15)
  text("Score:"+score,700,40)
  ground.display();
  platform1.display();
  platform2.display();  
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
  ball.display();
  slingshot.display();
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(ball.body)
  }
}
async function getTimeForBgImg(){
  var URL = "http://worldtimeapi.org/api/timezone/America/Chicago"
  var response = await fetch(URL)
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime
  var hour = dateTime.slice(11,13)
  if(hour>=06&&hour<=19){
    Bg = loadImage("dayBg.png")
  }
  else{
    Bg = loadImage("nightBg.png")
  }
  console.log(hour)
}