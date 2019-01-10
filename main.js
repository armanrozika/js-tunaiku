//Soal no.1

for(var i=0; i < 4; i++) {
    setTimeout(() => console.log(i), 0);
}
//why the code above log 4 (number) four times?
/* 
answer: 
That's because of default behavior of the keyword var, named hoisting. Hoisting meaning the variabel defined in for loops (in this case  var i), get hoisted to the top level.
Everytime loops iterate, it assigns a new value to the variable i, by the time loops ended, variable i has value of 4 (number). Take into account that setTimeout function, eventhough given 0 miliseconds, still needs to wait for loops to end (setTimeout is a non-blocking by default, it get sent to event loops, and it have to wait till there's no stack to be done to be executed). By the time setTimeout function invoked, variable i has value of 4 (number), so it console log 4 (number) four times.


The easiest way to get the number of 0,1,2,3 get printed is to use the es6 let keyword. Let keyword make code block for itself each iteration inside a for loops. So, in each iteration it assigns a new variable with new value and make a block around it (no hoisting). By the time setTimeout function get invoked, it already has different variable and different values respectively.
*/

//jawaban soal no.1
for(let i=0; i < 4; i++) {
    setTimeout(() => console.log(i), 0);
}


//no.2
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let per = new Person('arman', 27)

function Running(place) {
    
    return `${this.name} age of ${this.age} likes to run in ${place}`;
}
var x = Running.call(per, 'Senayan');
console.log(x) 




//no.3
var Person = function(fullName) {
    this.fullName = fullName;
    this.walking = () => {
        return `${this.fullName} is walking`;
    }
}
Person.prototype.running = function() {
    return `${this.walking()} and then running`;
}
var x = new Person('John Doe');
x.running() 


//no.4
var a = [1,2,3,4]+[5,6,7,8];
var b = [1,2,3,4]-[5,6,7,8];

//variable A work because javascript converts array into string if there's a (+) operator there, hence you get the value of 1,2,3,45,6,7,8(string). But, variable b outputted NaN because that's what you get if you try to subtract a string from a string. The term for the converted array to string is called Coercing.
