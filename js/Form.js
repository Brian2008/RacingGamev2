class Form{
    constructor(){
        
    }
    display(){
        var Title=createElement('h2')
        Title.html("Car Racing!")
        Title.position(500,50)
        var input=createInput("name");
        input.position(500,150);
        var button=createButton("Play!")
        button.position(500,200)
        var Greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount);
            Greeting.html("Hi! "+name);
            Greeting.position(500,150);
        })
    }
}
