let text = "I love cats. Cats are very easy to love. Cats are very popular.";

let matches = [...text.matchAll(/Cats/g)];
console.log(matches);