class Hero{
    #health

    constructor(name,health,attack){
        this.name = name;
        this.name = health;
        this.name = attack;
    }

    getName(){
        return this.name;
    }

    getHealth(){
        return this.#health
    }
    showStats(){
        console.log("Name: "+this.name);
        console.log("Health: "+this.#health);
        console.log("Attack: "+this.attack);
        console.log("----------------------")
    }

}

const hero1 = new Hero("Thorin",100,10);
const hero2 = new Hero("Gandalf",100,8);

console.log(hero1.getName())
console.log(hero1.getHeath())
console.log(hero2.getName())