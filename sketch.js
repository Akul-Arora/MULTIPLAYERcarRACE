var db;
var canvas;
var gameState=0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4,cars
var player,game,form;
function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
      }
   
}