
var database 
var form,player,game;
var gameState=0;
var playerCount;
var allPlayers;
var canvas;
var cars,car1,car2,car3,car4;

function setup(){
    database=firebase.database();
    console.log(database);
    canvas=createCanvas(displayWidth,displayHeight);

   game=new Game();
   game.getState();
   game.start();

    

    


}

function draw(){
    background("white");

   if(playerCount===4){
     game.updateGamestate(1);  
  
    }



    if(gameState===1){
      clear();
      game.play()
      Player.getPlayerInfo();
    
    }

}




