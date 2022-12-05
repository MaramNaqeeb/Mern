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
        this.name="Hyabusa";
        this.health=5;
        this.speed=10;
        this.strength=10;

        return this;
    }
    drinkSake(){
        this.health=this.health+10;
        return this.health;

    }


}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log (ninja1.sayName());
console.log (ninja1.showStats());
console.log (ninja1.drinkSake());
