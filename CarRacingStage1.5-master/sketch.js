var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track=LoadImage("../images/track.jpg");
  car1_image=LoadImage("../images/car1.png");
  car2_image=LoadImage("../images/car2.png");
  car3_image=LoadImage("../images/car3.png");
  car4_image=LoadImage("../images/car4.png");
  ground_image=LoadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
