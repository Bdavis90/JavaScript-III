/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When working the the global scope 'this' refers to the window object.
* 2. Implicit Binding: When a function is called, the object left of the dot refers to the 'this' keyword.
* 3. New Binding: When using the 'new' keyword it creates a new object and is returned to the construtor function.
* 4. Explicit Binding: 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
}
myName('Brandon')


// Principle 2
// code example for Implicit Binding
const obj = {
    greeting: 'Hello ',
    sayHello: function(name){
        console.log(this.greeting + 'my name is ' + name);
        
    }
}
    obj.sayHello('Brandon')

// Principle 3
// code example for New Binding

function Person (name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.greet = function() {
        console.log(this.greeting + this.name)
        
    }
}

const brandon = new Person('Greg')
const greg = new Person('Brandon')

brandon.greet('Greg')
greg.greet('Brandon')
// Principle 4
// code example for Explicit Binding

const me  = {
    name: 'Brandon'
}

let favoriteGames = ['Gears of War', 'Halo', 'GTA5', 'RDR2']

function aboutSelf(game1, game2, game3, game4) {
    console.log(`Hello, my name is ${this.name} and my favorite games are  ${game1}, ${game2}, ${game3}, and ${game4} `)
}

aboutSelf.call(me, favoriteGames[0], favoriteGames[1], favoriteGames[2], favoriteGames[3])