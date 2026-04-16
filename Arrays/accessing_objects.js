let user = {
    name: "harry",
    age: 30,
    profession: "magician"
}


const questions = [

    {Question : "what is red planet in our solar system?",

        "answers" : [{text : "earth", correct : false},

            {text : "Jupiter", correct :false},
            {text : "saturn", correct : false},
            {text : "mars", correct : true}
             
        ] 

    },

    
    {Question : "what is fastest animal  in our earth?",

        "answers" : [{text : "cheetah", correct : true},

            {text : "lion", correct :false},
            {text : "vulture", correct : false},
            {text : "falcon", correct : false}
             
        ] 

    }





]

console.log(questions[0].Question)
console.log(questions[0].answers)

// console.log(questions[1].answers)

console.log(user.profession)
console.log(user["name"])