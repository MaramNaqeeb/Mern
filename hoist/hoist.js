// GIVEN
console.log(example);
var example = "I'm the example!";
// I predict the answer is undefined


// console.log(example);
// let example = "I'm the example!";    

// // I predict the answer is error


console.log(hello);                                   
var hello = 'world'; 

// I predict the answer is undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// I predict the answer is magnit

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// I predict the answer is super cool


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// I predict the answer is chickedn
// I predict the answer is half-chicken



// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// I predict the answer is error


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// I predict the answer is undefined
// I predict the answer is rock
// I predict the answer is r&b
// I predict the answer is disco





// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// I predict the answer is error
