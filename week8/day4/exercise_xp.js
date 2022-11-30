// Exercise 1
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Expected output :
//  I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

const output = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

console.log(output);

// Exercise 3

/*Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.

Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ] */
const users = { user1: 18273, user2: 92833, user3: 90315 };

const expOutput = Object.entries(users);

console.log(expOutput);

let newArray = expOutput.map((item) => {
  return [item[0], item[1] * 2];
});

console.log(newArray);

/* Exercise 4 : Person Class
Instructions
Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);*/

// Output object

/*Exercise 5 : Dog Class
Instructions
Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
 */
// The solution 2 will extend the Dog class

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const lab = new Labrador('Dingo', 68);

console.log(lab);

// Exercise 6

//[2] === [2] -> false;
//{} === {} -> false;

/*const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) -> 4
console.log(object3.number) -> 4
console.log(object4.number) -> 5*/

/* Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white*/

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.sound = sound;
  }
  moos() {
    return `${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`;
  }
}

const farmerCow = new Mamal('Lily', 'cow', 'brown and white', 'Moooo');

console.log(farmerCow.moos());
