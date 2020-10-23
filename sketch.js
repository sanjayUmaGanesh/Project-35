//Create variables here
var dog,happyDog,happyDog1,database,foodS,foodStock;

function preload()
{
  happyDog = loadImage("images/dogImg.png");
  happyDog1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(happyDog);
  dog.scale = 0.3


  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw(){  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS)
    dog.addImage(happyDog1);

  }
  if(keyWentUp(DOWN_ARROW)){
    writeStocks(foodS);
    dog.addImage(happyDog1);
  }


  drawSprites();
  //add styles here
  textSize(33)
  stroke("black")
  fill(1000,2,0);
  text("Food remaining: " + foodS, 120, 120);
  
   

}
function readStock(data){
  foodS = data.val();
} 


function writeStocks(x){
  if(x <= 0){
    x = 20
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food: x
  })
}

