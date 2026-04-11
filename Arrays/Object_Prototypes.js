let animal = {
  eats: true
};

let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // inherited