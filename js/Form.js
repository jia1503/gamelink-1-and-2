class Form {
  constructor() {
   paperImg = loadImage("paper.png");
   cwImage = loadAnimation("cursed witch/cw0.png", "cursed witch/cw1.png", "cursed witch/cw2.png", "cursed witch/cw3.png", "cursed witch/cw4.png");
 
  }

  display(){
   
    var title = createElement('h2')
    title.html("The Shadows Of The Enchanted Jungle");
    title.position(550, 0);
   
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(675, 320);
    button.position(740, 400);
   
  
    button.mousePressed(function(){
      input.hide();
      button.hide();
      title.hide();
      background(paperImg);
      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(260, 320)
      animation(cwImage, 200, 400, 150, 150);
      
    });

  }

}
