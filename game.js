class Game {
constructor(){

}
getstate(){
    var gamestateref=database.ref('gamestate');
    gamestateref.on("value",function(data){
        gamestate=data.val();
    })
}

update(state){
    database.ref('/').update({
        gamestate:state
    });
}

async start(){
    if(gamestate===0){
    player=new Player();
   
    var playercountref=await database.ref("playercount").once("value");
    if(playercountref.exists()){
        playercount=playercountref.val();
        player.getcount();
    }
    console.log(player.index)
    form=new Form();
    form.display();
    }
}
play(){
    form.hide();
    textSize(30);
    text("Gamestart",120,100);

 Player.getplayerinfo();
 if(allplayers!==undefined){
     var displayposition=130;
    // console.log(allplayers);
     for(var plr in allplayers){
     //    console.log(player.index);
         if(plr==="player"+player.index){
             fill("red");
             
         }
         else{
             fill("black");
         }
     
     displayposition+=20;
     textSize(15);
     text(allplayers[plr].name,+ ": " +allplayers[plr].distance,120,displayposition);
 }
 }
    


if(keyIsDown(UP_ARROW)   && player.index!==null){
player.distance+=50;
player.update();

}
}
}
