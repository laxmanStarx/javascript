let marks = {
    harry: 80,
    shubhum: 56,
    lovish: 89,
    monika:5
}

for(let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i]+ "are " + marks[Object.keys(marks)[i]])
}