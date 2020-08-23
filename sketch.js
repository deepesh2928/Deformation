var car,wall;
var speed,weight;

function setup() {
	createCanvas(1000,400);

	speed=random(55,90);
	weight=random(150,400);

	car=createSprite(50,200,50,50);
	wall=createSprite(900,200,60,200);
}
function draw() {
 background(0);

 car.velocityX=speed;

 if(car.isTouching(wall)){
  car.velocityX=0;
 }
 if(((0.5*weight*speed*speed)/22500 < 100) && car.isTouching(wall)){
  car.shapeColor=color(0,255,0);
 }
 if((((0.5*weight*speed*speed)/22500)===random(100,180)) && car.isTouching(wall)){
  car.shapeColor=color(255,255,0);
 }
 console.log("Third If:" +0.5*weight*speed*speed/2250 );
 if(((0.5*weight*speed*speed)/22500 > 180) && car.isTouching(wall)){
  car.shapeColor=color(255,0,0);
 }
 drawSprites();
}