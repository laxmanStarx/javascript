let animal = {
  eats: true
};

let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // inherited

let user = {
    name: "Rahul",
    age:22
}

console.log(user.name)