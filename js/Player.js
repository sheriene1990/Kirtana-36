class Player {
  constructor(){
    //1add propertis
    this.index = null
    this.distance = 0
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      'playerCount': count
    });
  }
//1remove the name argument
  update(){
    var playerIndex = "players/player" + this.index;
   // var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      //1change the value to the current properties and head for Form.js -line29
      'name':this.name,
      'distance': this.distance
    });
  }
  //2create a static function to collect all the player details head for sketch.js- line8
 static playerInfo(){
   //3make the function static so it applies itself on all the objects
    //3refer to the firebase db- players gets created
database.ref("players").once("value",(data)=>{
allPlayers= data.val();


})
  }
}
