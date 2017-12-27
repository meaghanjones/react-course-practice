//setup constuctor to take name and age with a default age of 0.
//getDescription - return a string to take a persons age - Andrew Mead is 26 years old.

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`
  }

}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);//calling parent constructor function and passing them through
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if (this.hasMajor) {
      description = description += ` Their major is ${this.major}.`
    }
    return description;
  }

}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);//calling parent constructor function and passing them through
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if (this.hasHomeLocation) {
      greeting = greeting += `. I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }

}


const me = new Traveler ('Sonja', 29, 'Portland');
console.log(me.getGreeting());
// const me = new Student('Meaghan Jones', 32, 'Political Science');
// console.log(me.getDescription());
//
// const other = new Student ();
// console.log(other.getDescription());
