class Game{
    
    constructor(){
    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", (data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }

        form = new Form();
        form.display();
        }        
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Started", 320, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var displayPosition = 330;
            for(var plr in allPlayers){
                if(plr === 'player' + player.index){
                    fill("red");
                } else{
                    fill("black");
                }

                displayPosition += 20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 220, displayPosition);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}