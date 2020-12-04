//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;




function preload()
{
 
  //load images here
  dog=loadImage("images/dogImg1.png")
  happyDog=loadImage("images/dogImg.png")
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  
  dog1=createSprite(200,155,30,40)
  dog1.addImage(dog)
  dog1.scale=0.7;

  
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock)


 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog2.addImage(happyDog)
    dog2.scale(0.7)
   }
  

  
}


function draw() {  
  background(46, 139, 87)


  

  drawSprites();
  //add styles here
  text ("Note:Press UP_ARROW key to feed drago milk!",200,50)

}

writeStock();
readStock();


//function to read value from DB
function readStock(data){
foodS=data.val();
}

//function to write value from DB
function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1
}


database.ref('/').update({
  food:x
})
}

