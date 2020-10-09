class Form {
  constructor() {
    //4make them properties refering to 11,15,18,21,31- remove the elements under display() once done
    //4add the this. keyword to the elements within the display()
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  //11 as per line 10
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display() {

    this.title.html("Car Racing Game");
    this.title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    //function hence line 29
    this.button.mousePressed(() => {
      console.log("Mouse event")
      //10since input and button are now properties and not elements, the hide() method cannot be used, so define it
      this.input.hide();
      this.button.hide();
      //.hide()
      //4name is a property of the player, input is a property of the form class
      player.name = this.input.value();

      playerCount += 1;

      //5index the player count
      player.index = playerCount;

      //1remove the argument
      player.update()
      console.log("Playcount " + playerCount)
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 160)
    });

  }
}
