const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;




//var para o corpo plano:
var plane

//var para os blocos
var block1, block2, block3;


function setup() {
  var canvas = createCanvas(550, 600);

  engine = Engine.create();
  world = engine.world;

  //propriedade para o corpo plano ficar parado
  var plane_options = {
    isStatic: true
  }


  //corpo plano
  plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
  //adicionando ao mundo
  World.add(world, plane);

  //criar múltiplas propriedades de blocos 
  //se basear no pdf do projeto
var block1_options = {
  restitution:0.5,
  friction:0.02,
 frictionAir:0
}
var block2_options = {
  restitution:0.7,
  friction :0.01,
 frictionAir:0.1
}
var block3_options = {
  restitution:0.1,
  friction:1,
 frictionAir:0.3
}
  //corpos dos blocos, se basear no pdf do projeto

  block1 = Bodies.circle(220,10,10,block1_options)
  World.add(world,block1)
  
  block2 = Bodies.circle(110,50,10,10,block2_options)
  World.add(world,block2)
  
  block2 = Bodies.circle(350,50,10,10,block3_options)
  World.add(world,block3)
  



  //estilizando os corpos aqui
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  //ative e coloque uma cor em background 
  // background();
  background("black");
  //descomente o código correto para atualizar o motor de física:
  Engine.update(engine);
  //Engine.update(engine_word);
  //Engine.update(eng);

  //exibindo corpo plano
  rect(plane.position.x, plane.position.y, 1200);


  //descomente para ativar a exibição dos blocos(corpos)
  ellipse(block1.position.x, block1.position.y, 30);
  rect(block2.position.x, block2.position.y, 50, 50);
  rect(block3.position.x, block3.position.y, 100, 50);


}
