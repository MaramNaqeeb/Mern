class Card{
constructor(name,cost){
    this.name=name;
    this.cost=cost;
}
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }

    attack(target){
          if( target instanceof Unit ) {
          target.res-=this.power;
        console.log(target.name+" is attacked by "+"Red Belt"+" so its resilience now is "+target.res+" after decreaseing the power which is "+this.power);
    
 } else {
            throw new Error( "Target must be a unit!" );
        }
}   

}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
      
    }

    play( target ) {
            if( target instanceof Unit ) {
           
            console.log(this.text+" "+target.name+" "+this.stat+" by "+this.magnitude);
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
        
}

const redbelt= new Unit("Red Belt Unit's",3,4,3);
const hardalgo= new Effect("Hardalgo", 2,"increase","resilience", 3);
const blackbelt= new Unit("Black Belt",4,4,5);
const uphandled = new Effect("Unhandled Promise Rejection",1,"reduce","resilience",2);
const PairProgramming = new Effect("Pair Programming",3,"increase","power",2);

hardalgo.play(redbelt);
uphandled.play(redbelt);
PairProgramming.play(redbelt);
redbelt.attack(blackbelt);
