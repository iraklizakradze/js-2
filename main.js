'use strict';

/* ===== HOMEWORK 2 ===== */


// ----- 1 ----- //
let arrayNumbers = [5, 15, 25, 45, 55, 65, 85, 100]

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element)
}

for (let item of arrayNumbers) {
    console.log(item)
}


// ----- 2 ----- //
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]

for (let i = 0; i < array1.length; i++) {
    const num = array1[i];
    if (num > 0 && num < 10) {
        console.log(num)
    }
}

for (let item of array1) {
    if (item > 0 && item < 10) {
        console.log(item)
    }
}


// ----- 3 ----- //
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if(element === 5) {
        console.log('არის')
        break;
    }
    //console.log(element)
}

for (let item of array2) {
    if(item == 5) {
        console.log('არის')
        break;
    }
    //console.log(item)
}


// ----- 4 ----- //
let array3= [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}
console.log(sum);


// ----- 5 ----- //
let array4= [1, 2, 3, 4, 5];
let arithsum = 0;

for (let i = 0; i < array4.length; i++) {
    arithsum += array4[i] / array4.length;
}
console.log(arithsum);


// ----- 6 ----- //
let array5 = [1, 2, 3, 7, 6, 9];

for(let item of array5) {
    if (item === 7){
        continue;
    }
    console.log(item)
}

// ----- 7 ----- //
let user = {
    firstName: 'Giorgi',
    lastName: 'Smith',
    age: 25,
    studentStatus: 'Active'
};
console.log(user.studentStatus);


// ----- 8 ----- //
let user2 = {
    name: 'Anna',
    age: 20,
    studentStatus: 'active'
}

if(user2.age < 18 && studentStatus === 'active'){
    console.log('hello user')
}else if (user2.name === 'levani'){
    console.log('hello levani')
}else if (user2.student === 'active' || user2.age < 25){
    console.log('hello anna')
}else {
    console.log('error')
}


// ----- 9 ----- //
let array6 = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]

for (let index = 0; index < array6.length; index++) {
    const element = array6[index];
    if(element % 2 === 0)
    console.log(element)
}

for(let item of array6) {
    if(item % 2 === 0){
        console.log(item)
    }
}


// ----- 10 ----- //
let users = [
    {username: 'giorgi', status: 'false'},
    {username: 'levani', status: 'false'},
    {username: 'anna', status: 'true'}
];

for(let item of users){
    if(item.status === 'true'){
        console.log(item) 
    }
}

for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if(element.status === 'true'){
        console.log(element);
    }
}


// ----- 11 ----- //
let array7 = [32, 14, 10, 'hello', null, 40, 50];

for (let index = 0; index < array7.length; index++) {
    const element = array7[index];
    if(element % 5 === 0 && typeof element === 'number')
    console.log(element)
}

for(let item of array7){
    if(item % 5 === 0 && typeof item === 'number')
    console.log(item)
}


// ----- 12 ----- //
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (let index = 0; index < array8.length; index++) {
    const element = array8[index];
    //console.log(element)
    for (let item = 0; item < element.length; item++) {
        const value = element[item];
        if(value > 0) 
        console.log(value) 
    }
};


for(let item of array8){
    for(let element of item){
        if(element > 0)
        console.log(element)
    }
}

/* =========================================== */