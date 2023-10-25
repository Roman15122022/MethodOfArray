/*const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = [5,4,6,7,9,8,1,2,3]

console.log(arr.map((item)=>{ /!*MAP*!/
    return item * 10;
}))

console.log(arr.reduce((item, sum)=>{ /!*REDUCE*!/
    return sum + item;
}))

console.log(arr.find((item)=>{ /!*FIND*!/
    return item**2 === 4;
}))

console.log(arr.filter((item)=>{ /!*FILTER*!/
    return item%2 === 0;
}))
console.log(arr.reverse()); /!*Reverse*!/
console.log(arr2.sort()); /!*Sort*!/*/

/*arr.forEach((elem, index)=>{ /!*ForEACH*!/
    console.log(`elem: ${elem} index: ${index}`)
})*/

/*Task 1*/
/*Write a function filterRange(arr, a, b) that takes an array arr, searches for elements with values greater than or equal to a and less than or equal to b and returns the result as an array.

The function should return a new array and not modify the original array.

For example:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (no changes)*/

function filterRange(arr, a, b) {
    return arr.filter((item)=>{
        return item>= a && item<= b;
    })
}

let array = [5,3,8,1];

let filtered = filterRange(array, 2 , 6);
console.log(filtered)

/*Sort in descending order*/

let arr3 = [5, 2, 1, -10, 8];
console.log(arr3.sort().reverse());

/*You have an array of user objects, and each of them has a user.name.
 Write code that converts them into an array of names.*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

let names = users.map((item)=>{
    return  item.name;
}) ;

console.log(names)
/*Write a function sortByAge(users) that takes an array of objects with the age property and sorts them by it.*/

function sortByAge(users){
    return users.sort((a, b)=>{
        return a.age > b.age ? 1: -1;
    })
}

sortByAge(users);
console.log(users);

/*Write a function getAverageAge(users)
 that takes an array of objects with the age property and returns the average age.*/
function getAverageAge(arr){
    const sum = arr.reduce((sum,item)=>{
        return sum + item.age;
    },0)
    return sum / arr.length;
}

console.log(getAverageAge(users))

/*Shuffle*/
function shuffle(arr){
   return arr.sort(()=> Math.random() - 0.5);
}
let arr4 = [1,2,3];

console.log(shuffle(arr4));


