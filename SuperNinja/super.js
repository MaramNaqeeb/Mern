class Ninja{
 
    constructor (name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        this.name="Hyabusa";

        return this.name;
    }
    showStats(){
        this.name=this.name;
        this.health=this.health;
        this.speed=this.speed;
        this.strength=this.strength;

        // console.log("name:"+this.name,"health:"+this.health,"speed:"+this.speed,"strength:"+this.strength);
         console.log(`name:${this.name} and health:${this.health} speed:${this.speed} strength: ${this.strength}`);
    }
    drinkSake(){
        this.health= this.health+10;
        return this.health;

    }


}



class Sensi extends Ninja{
    constructor (wisdom,health,speed,strength){
        super("Ahmad",health,speed,strength);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
   
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        
    }
  

}
const sensi = new Sensi("Ahmad");
sensi.speakWisdom();

sensi.showStats();





