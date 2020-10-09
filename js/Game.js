class Game {
  //6hide the form for gamestate 1
  //6collect the player details, display the player details
  //6update the distance onto the db- up arrow key
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      'gamestate': state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  //7create a function as per requirements of point 6
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    //8as mentioned on line 31 of the Player class- static function
    Player.playerInfo();
//8as per line 35 of the Player class
    if(allPlayers !== undefined){
      var display_position = 130;
      //8the array of players is stored into the plr variable
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
}
}
