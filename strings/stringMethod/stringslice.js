let text = "apple, Banana, kiwi";

let part = text.slice(7,13);

console.log(part)


// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).




let fruit = "Apple, Banana, Kiwi";

let parts = fruit.slice(-12,-6)

console.log(parts)

let vegetable = "Cabbage, Cauliflower, carrot"

let substring = vegetable.slice(8)

let subvegies = vegetable.substr(4,8)

console.log(substring)
console.log(subvegies)