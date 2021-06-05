var dog,happyDog,database, foodS, foodStock, lastFed, dogImage, happyDogImage,milk,milkImage,fedTime,foodObj;
var feed,addFood,gameState,gameStatee,bedroomImage,gardenImage,washroomImage,currentTime;
function preload()
{
dogImage=loadImage("images/dogImg.png");
happyDogImage=loadImage("images/dogImg1.png")
bedroomImage=loadImage("virtual+pet+images/Bed Room.png")
gardenImage=loadImage("virtual+pet+images/Garden.png")
washroomImage=loadImage("virtual+pet+images/Wash Room.png")
}

function setup() {
	createCanvas(500, 500);
  milk=createSprint(200,200,20,20)
 dog=createSprite(200,200,20,20)
 dog.addImage(dogImage)
 dog.scale = 0.2

 foodObj=new Food(200,200,20,20);


 feed=createButton('FeedDog');
feed.position(700,95)
feed.mousePressed(feedDog)

 addFood=createButton('AddFood');
 addFood.position(800,95)
 addFood.mousePressed(addFoodS)

 fedTime

 database=firebase.database();
 foodStock=database.ref('Food');
 foodStock.on("value",getFoodStock)

 gameState=database.ref('gamestate')
 gameState.on("value",function(data){
gameStatee=data.val()
 })

 fedTime=database.red('FedTime');
 fedTime.on("value",function(data)
 {
 lastFed=data.val()
 }
 )
}

function draw() {  
  background(46,139,87)

  foodObj.display();
  writeStock(foodS);

  if(foodS==0){
  dog.addImage(happyDogImage)
  milk.visible=false;
  }
  else{
  dog.addImage(sadDog)
  milk.visible=true;
  }

if(gameState===1){
dog.addImage(happyDogImage);
dog.scale=0.75;
dog.y=250;
}
if(gameState===2){
dog.addImage(sadDog)
milk.visible=false;
}
var bath=createButton("I want to take a bath");
bath.position(580,125)
if(bath.mousePressed(function(){
gameState=3;
database.ref('/').update({'gameState':gameState})
}))
if(gameState==3){
dog.addImage(washroom)
dog.scale=1;
milk.visible=false;
}
var sleep=createButton("I am very sleepy");
sleep.position(710,125)
if(sleep.mousePressed(function(){
  gameState=4;
  database.ref("/").update({'gameState':gameState});
}))
if(gameState==4){
  dog.addImage(bedroom)
  milk.visible=false;
}
var play=createButton("I want to play");
play.position(500,160)
if(play.mousePressed(function(){
  gameState=5;
  database.ref("/").update({'gameState':gameState});
}))
if(gameState==5){
  dog.addImage(livingroom)
  dog.scale=1;
  milk.visible=false;
}
var playingarden=createButton("Lets play in park");
playingarden.position(585,160)
if(playingarden.mousePressed(function(){
  gameState=6;
  database.ref("/").update({'gameState':gameState});
}))
if(gameState==6){
  dog.y=175;
  dog.scale=1;
  dog.addImage(garden)
  milk.visible=false;
}

textSize(15)
if (lastFed>=12){
text("Last Fed"+ lastFed%12+ "PM",350,350)
}
else if(lastFed==0){
text("Last Fed:12 AM",350,350)
}
else{
text("Last Fed:"+lastFed+"AM",350,350)
}

fill("black")
text("Note:Press Up Arrow to Feed",100,100)

drawSprites();
  
  
}

function addFoodS(){
x=x+1;
}
function feedDog(){
hour();
dog.addImage(happyDogImage)
database.ref("/").update({
foodStock=foodStock-1
fedTime:hour()
})

function draw(){
var x=80,y=100;

imageMode(CENTER);
image(this.image,720,220,20,20);

if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++)
}
if(i%10==0){
x=80;
y=y+30;

if(gameState=!"Hungry"){
feed.hide();
addFood.hide();
dog.remove()
}
else{
feed.show();
addFood.show();
dog.addImage(sadDog)

}

})
}
if(currentTime==lastFed+1){
dog.garden();
gameState='play';
function update(gameState)
database.ref("/").update({
gameState:play
})
}

if(currentTime==lastFed+2){
  dog.bedroom();
  function update(gameState)
  database.ref("/").update({
  gameState:sleeping
  })
}
if(currentTime>lastFed+2 && currentTime<lastFed+4){
  dog.washroom();
  dog.addImage("virtual+pet+images/bathingdog.png")
  function update(gameState)
  database.ref("/").update({
  gameState:bathing
  })
}
else{
  gameState=hungry;

  function update(gameState)
  database.ref("/").update({
  gameState:hungry

  
}



//howtocreate a node with string value
//where is sad dog image

