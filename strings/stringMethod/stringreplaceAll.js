let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

console.log(text)


// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown