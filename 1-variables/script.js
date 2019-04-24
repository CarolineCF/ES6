//1.1 Types simples

let name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)
// La valeur d'une variable const ne peut être modifiée par des réaffectations ultérieures. Une constante ne peut être déclarée à nouveau.

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)
// pas d'erreur car on peut très bien ajouter un élément à un tableau déclaré en const

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}
//Impossible de déclarer savedGame en const car sa portée est celle du bloc et comme nous en avons besoin en dehors..
console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)

