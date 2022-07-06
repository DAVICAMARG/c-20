
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var chao
 var ball
 var square
 var rectangle


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
     var chaooptions={
		isStatic:true 
	 }
chao=Bodies.rectangle(400,700,800,200,chaooptions)
World.add(world,chao)
	Engine.run(engine);
	

	var ballopitions={
	 restitution:0.2,
	 friction:0.02,
	 frictionAir:0
    


	}
    ball=Bodies.circle(100,100,30,ballopitions)
	World.add(world,ball)

	var squareopitions={
     restitution:0.01,
     friction:0.01,
    frictionAir:0.2,
	}
    square=Bodies.rectangle(200,100,40,40,squareopitions)
	World.add(world,square)	 


	var rectangleopitions={
		restitution:0.8,
		friction:0.5,
		frictionAir:0.7,


	}
   
     rectangle=Bodies.rectangle(300,100,50,60,rectangleopitions)
	 World.add(world,rectangle)


}


function draw() {
  rectMode(CENTER);
  background(50);
   Engine.update(engine)  
     rect(chao.position.x,chao.position.y,800,200)
      ellipseMode(RADIUS)
      ellipse(ball.position.x,ball.position.y,30)

       rectMode(CENTER)
	   rect(square.position.x,square.position.y,40,40)

        rectMode(CENTER)
		rect(rectangle.position.x,rectangle.position.y,50,60)

  drawSprites();
 
}



