class Person{
    name;
    age;
    occupation;
    message;

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Messsage:" + this.message)
        console.log("-----------------");
    }
    ShowName(){
        console.log(this.name);
    }
    ShowMassage(){
        console.log(this.message);
    }

}
const person1 = new person ("coco Martin",24,"Masahista","Ser, tapos napo");
const person2 = new person ("Victor Mangtanggol",24,"superhero","arjooooooo");

person1.displayInfo();
person2.displayInfo();