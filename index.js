// Single Line Comment
/*
    Multi Line Comment
*/

const forename = "Scott"
const surname = "Greenhalgh"

const fullname = forename + " " + surname

console.log(fullname)

const numbers = [
    3,
    7,
    11
]

console.log(numbers)

const Scott = {
    forename: "Scott",
    surname: "Greenhalgh",
    age: 19,
    home: "York"
}

console.log(Scott, Scott.forename)

const Callum = {
    forename: "Callum",
    surname: "Denby",
    age: 19,
    home: "Surrey"
}

const People = [
    Scott,
    Callum
]


People.find(obj => obj.forename === "Callum")

People.push({
    forename: "Callum",
    surname: "Wigglesworth",
    age: 18,
    home: "Bin"
})

console.log(People)

const Callums = People.filter(person => person.forename === "Callum")

console.log(Callums, People)

function square(a) {
    return a * a
}

console.log(square(10))

const cube = a => a * a * a

cube(10)
