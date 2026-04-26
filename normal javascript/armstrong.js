function isArmstrong(n) {
    let original = n;

    // Step 1: count digits
    let digits = 0;
    let temp = n;

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    // Step 2: calculate sum of powers
    let sum = 0;
    temp = n;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }

   
    return sum === original;
}

// Test
let num = 153;

if (isArmstrong(num)) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}