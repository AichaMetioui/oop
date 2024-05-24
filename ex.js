 class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return  `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
 }

const person1 = new Person("aicha",28);
console.log(person1.introduce());


function describePerson(callback) {
    callback.call(person1);
}

function exampleCallback() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

describePerson(exampleCallback);

//promise :

function Wait( milliseconds) {
    const firstP = new Promise ((res,rej)=> 
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, milliseconds)

).then(()=> console .log("after"))
.catch(err=> console.log("error"))


return firstP;
}

Wait(1000);