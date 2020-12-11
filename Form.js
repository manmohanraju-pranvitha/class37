class Form{
    constructor(){
this.input= createInput("name");
this.button=createButton("play");
this.greeting=createElement("h3");
    }
    hide(){
        this.input.hide();
       this. button.hide();
       this.greeting.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(130,0);
       
       
        
     this.input.position(130,160);
     this.button.position(250,200);
      this. button.mousePressed(()=>{
         this. input.hide();
           this.button.hide();
          player.name=this.input.value();
            playercount+=1;
            player.index=playercount; 
            console.log(player.index);
            player.update();
            player.updatecount(playercount);
           this.greeting.html("hello "+player.name );
           this.greeting.position(130,100);
        })
           
           
    
    }

}