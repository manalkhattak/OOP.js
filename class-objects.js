let person1 = {
    name : "Manal",
    age : 16
}

function person(name,age,city,course){
    this.name = name
    this.age = age
    this.city = city
    this.course = course
}

class student{
    #name;
    #age;
    #gender;
    #city;
    #course;
    #institute;

    constructor(name,age,gender,city,course){
        this.#name = name
        this.#age = age
        this.#gender = gender
        this.#city = city
        this.#course = course
        this.#institute = 'SMIT'
    }
    get name(){
        return this.#name
    }
    set name(newName){
        if (newName === 'hamza'){
            console.log(`You cannot have a name ${newName}.`)
        }
        else{
            this.#name = newName;
        }
    }
}

p1 = new student('javeria',16,'female','peshawar','AI')
p2 = new student('sidra',23,'female','islamabad','AI')
p3 = new student('bisma',21,'female','mardan','AI')
console.log(p1)
console.log(p2)
console.log(p3)

//********ENCAPSULATION********

class vehicle{
    constructor(color, currentSpeed, maxSpeed){
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move(){
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount){
        this.currentSpeed += amount;
    }
    musicPlayer(){
        console.log("Gasolina!!!")
    }
}

class motorcycle extends vehicle{
    constructor(color, currentSpeed, maxSpeed, fuel){
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel!")
    }
    musicPlayer(){
        console.log("CHAL HATTT!!!")
    }
}

m1 = new motorcycle('Black',0,150,'Petrol')
v1 = new vehicle('Black',0,150,)
