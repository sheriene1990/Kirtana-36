//1start on Player.js- line3
var canvas, backgroundImage;

var gameState = 0;
var playerCount  = 0;

var database;
//2create a new variable for all the players
var allPlayers;
var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //9
  if(playerCount === 4){
game.update(1);
  }
  if(gameState === 1){
    //12
    clear();
game.play();
  }
}
