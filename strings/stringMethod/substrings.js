// the substring is similar to slice()

//  The difference is that start and end values less than 0 are treated as 0 in substring().

let fruits = "apple, mango, banana, cherry"

let substring = fruits.substr(4,8);
console.log(substring)