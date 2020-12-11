var canvas,backgroundimg;
var gamestate=0;
var playercount,database;
var form,player,game;
var allplayers;
function setup(){
 
 // console.log(database);
  canvas=createCanvas(400,400);
  database = firebase.database();
  game=new Game();
  game.getstate();
  game.start();
}

function draw(){
 // background("white");
 if(playercount===4){
   game.update(1);
 }
 if(gamestate===1){
   clear();
   game.play();
   
 }
   
   // drawSprites();
  
}



