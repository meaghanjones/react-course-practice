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

const me = new Person('Meaghan Jones', 32);
console.log(me.getDescription());

const other = new Person ();
console.log(other.getDescription());
