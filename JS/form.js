class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement("h1");
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(230, 0);
        this.input.position(230, 160);
        this.button.position(370, 200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(130, 100);
            
        })
    }
}