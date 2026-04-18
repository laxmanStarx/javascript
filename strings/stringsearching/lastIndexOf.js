// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:



let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index)


// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

let text = "Please locate where 'locate' occurs!";
let indexes = text.lastIndexOf("John");
console.log(indexes)



let text = "Please locate where 'locate' occurs!";
let findindex = text.lastIndexOf("locate", 15);

console.log(findindex)



// The lastIndexOf() method accepts a second parameter as the starting position for the search.

// Remember that the lastIndexOf() method searches backwards, so position 15 means start the search at position 15, and search to the beginning.

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.