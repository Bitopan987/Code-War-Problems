// Higher Order Function

// callback

function addTwo(n) {
  return n + 2;
}
function addTwoToArray(arr, cb) {
  let final = [];
  for (let num of arr) {
    final.push(cb(num));
  }
  return final;
}

// filtermale

const grades = [
  { name: 'john', grade: 4, sex: 'M' },
  { name: 'bito', grade: 4, sex: 'M' },
  { name: 'johney', grade: 4, sex: 'M' },
  { name: 'john', grade: 4, sex: 'M' },
  { name: 'hiya', grade: 4, sex: 'F' },
  { name: 'tinkl', grade: 4, sex: 'M' },
  { name: 'tina', grade: 4, sex: 'F' },
];

function isMale(personDetail) {
  return personDetail.sex == 'M';
}

function filterMale(arr) {
  let final = [];
  for (let person of arr) {
    if (isMale(person)) {
      final.push(person);
    }
  }
  return final;
}

//  multiplyBy

function multiplyBy(num) {
  return function (num2) {
    return num * num2;
  };
}

let multiplyByFive = multiplyBy(5);
multiplyByFive(3);

// String Methods
1; //
let message = 'If you still thinking the answer is no!';
// word exist
console.log(message.indexOf('still') !== -1);
// check Index
console.log(message.slice(3, 6) === 'you');

// log the words from string
// to get an array
let messageArray = message.split();
for (let word of messageArray) {
  console.log(word);
}

2; //
let from = 'Bitopan Deka';
let quote = 'there is only one thing we say to death: not today!';
let to = 'Arya Stark';

// log 1st 6 character of log
for (let i = 0; i < 6; i++) {
  console.log(`the character at index ${i} is ${quote[i]}`);
}
//concat
let final = from.concat(' said ', quote, ' to ', to);
// quote 70 character
let max = 70;
let length = quote.length;
let newQuote = quote + '.'.repeat(max - length);
// . at the length of 30
console.log(quote.slice(0, 30)) + '...';

// Array Methods
1; //
let fruits = ['mango', 'apple', 'orange', 'papaya'];
// add a new element to the start
fruits.splice(0, 0, 'guava');
fruits.join('-').toLocaleUpperCase();

2; //

let numbers = [1, 5, 7, 3, 9, 4, 23, 52, 75];
let string = ['this', 'is', 'a', 'collections', 'of', 'words'];

// largest number
let largest = [...numbers].sort((a, b) => a - b).pop();
//longest string
let longest = [...string].sort((a, b) => a.length - b.length).pop();
// average
function average(words) {
  return (
    words
      .map((w) => w.length)
      .reduce((acc, cv) => {
        return acc + cv;
      }, 0) / words.length
  );
}

// IMPLEMENT ARRAY METHODS

// MAP

function map(array, cb) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    let elm = array[i];
    final.push(cb(elm, i, array));
  }
  return final;
}

//FOREACH

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    let elm = array[i];
    cb(elm, i, array);
  }
}

// FILTER

function filter(array, cb) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    let elm = array[i];
    if (cb(elm, i, array)) {
      final.push(elm);
    }
  }
  return final;
}

//REDUCE

function reduce(array, cb, iv) {
  let acc = iv;
  for (let i = 0; i < array.length; i++) {
    let elm = array[i];
    acc = cb(acc, elm, i, array);
  }
  return acc;
}

reduce(
  array,
  (acc, cv) => {
    return acc + cv;
  },
  0
);

// FIND

function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    let elm = array[i];
    if (cb(elm, i, array)) {
      return elm;
    }
  }
}

// REDUCE METHOD

let persons = [
  { name: 'john', grade: 2, sex: 'M' },
  { name: 'bito', grade: 8, sex: 'M' },
  { name: 'johney', grade: 4, sex: 'F' },
  { name: 'john', grade: 9, sex: 'M' },
  { name: 'hiya', grade: 4, sex: 'F' },
  { name: 'tinkl', grade: 12, sex: 'M' },
  { name: 'tina', grade: 5, sex: 'F' },
];

// Totalgrade

let totalGrade = persons.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0);

let highestGrade = persons
  .map((p) => p.grade)
  .sort((a, b) => a - b)
  .pop();

let highestMaleGrade = persons
  .filter((p) => p.sex === 'M')
  .map((p) => p.grade)
  .sort((a, b) => a - b);

//2

let fruits = ['mango', 'apple', 'banana', 'apple', 'apple', 'orange', 'papaya'];

let fruitsArray = fruits.reduce((acc, cv) => {
  if (acc[cv]) {
    acc[cv] = acc[cv] + 1;
  } else {
    acc[cv] = 1;
  }
  return acc;
}, {});

let final = Object.keys(fruitsArray).reduce((acc, cv) => {
  acc = acc.concat([[cv, fruitsArray[cv]]]);
  return acc;
}, []);

//3

// flat using reduce

let data = [
  [1, 2, 3, 5],
  [5, 7, 3, 9],
  [9, 5, 23, 1],
  [[7, 4, 9, 2], 12],
];

data.reduce((acc, cv) => {
  return acc.concat(cv.flat(Infinity));
}, []);

//Pipeline

function increment(num) {
  return num + 1;
}
function double(num) {
  return num * 2;
}
function decrement(num) {
  return num - 1;
}
function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

pipeline.reduce((acc,cv) => {
    acc = cv(acc)
    return acc
},3)


// People Of GOT

let houseNames= [],
for(let house of got.houses){
  houseNames.push(house.name)
}


let houseInfo= {},
for(let house of got.houses){
  houseInfop[house.name] = house.people.length
}

// all the people of all the houses

let allPeople = []

for(let house of got.houses){
  for(let people of house.people){
    allPeople.push(people.name)
  }
}

// Scoping Question

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
       console.log(i);
   }, 3000);
}
// 3 will be return 3 times

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
       console.log(i);
   }, 3000);
}
// 0 1 2

for (const i = 0; i < 3; i++) {
  setTimeout(() => {
       console.log(i);
   }, 3000);
}
// 0

// js snippet
const asyncFun = async (params) => {
  console.log("step 2");
};

const asyncFun2 = async (params) => {
  return await "step 3";
};
 // will return a promise fullfilled with "step 3"


// CallBack, Promises, Async and Await

const datas = [
  {name:"ajay",profession:"Software Engineer"},
  {name:"bikash",profession:"Software Engineer"}
]

function getDatas(){
  setTimeout(() => {
    let output=""
    datas.forEach((data,index) => {
      output+= `<li>${data.name}<li>`
    })
    document.body.innerHTML = output
  },5000) // if we put 1000 here result will be ajay and bikash only
}

function createData(newdata){
  setTimeout(() => {
    datas.push(newdata)
  },2000)
}
getDatas()
createData( {name:"Amit",profession:"Software Engineer"})


// to solve this kind of problem we use callback()

const datas = [
  {name:"ajay",profession:"Software Engineer"},
  {name:"bikash",profession:"Software Engineer"}
]

function getDatas(){
  setTimeout(() => {
    let output=""
    datas.forEach((data,index) => {
      output+= `<li>${data.name}<li>`
    })
    document.body.innerHTML = output
  },5000) 
}

function createData(newdata,callback){
  setTimeout(() => {
    datas.push(newdata)
    callback()
  },2000)
}

createData( {name:"Amit",profession:"Software Engineer"},getDatas)

// using Promise

const datas = [
  {name:"ajay",profession:"Software Engineer"},
  {name:"bikash",profession:"Software Engineer"}
]

function getDatas(){
  setTimeout(() => {
    let output=""
    datas.forEach((data,index) => {
      output+= `<li>${data.name}<li>`
    })
    document.body.innerHTML = output
  },5000) 
}

function createData(newdata){
  return new Promise((res,rej) => {
    setTimeout(() => {
      datas.push(newdata)
      let error = false;
      if(!error) {
        res()
      }else{
        rej("Somthing went wrong")
      }
    },2000)
  })
}

createData( {name:"Amit",profession:"Software Engineer"}).then(getDatas).catch("Something went wrong")

// ASYNC OR AWAIT

const datas = [
  {name:"ajay",profession:"Software Engineer"},
  {name:"bikash",profession:"Software Engineer"}
]

function getDatas(){
  setTimeout(() => {
    let output=""
    datas.forEach((data,index) => {
      output+= `<li>${data.name}<li>`
    })
    document.body.innerHTML = output
  },5000) 
}

function createData(newdata){
  return new Promise((res,rej) => {
    setTimeout(() => {
      datas.push(newdata)
      let error = false;
      if(!error) {
        res()
      }else{
        rej("Somthing went wrong")
      }
    },2000)
  })
}

async function start(){
  await createData( {name:"Amit",profession:"Software Engineer"}).then(getDatas).catch("Something went wrong")
  getDatas()
}

start()

// Rest with array

function addNumbers(...other){
  console.log(other) 
  return other.reduce((acc,cv) => {
    return acc + cv
  },0)
}

addNumbers(2,5,1,5,8) 

// spread with array

const names = ["ajay","rahul","vivek"]
function getName(name1,name2,name3){
  console.log(name1,name2, name3)
}


// Rest with objects

var students = {
  name:"Ajay",
  age:25,
  hobbies:["cricket","football"]
}
const{...rest} = students
console.log(rest) // {name: 'Ajay', age: 25, hobbies: Array(2)}

const{age,...rest} = students
console.log(rest) // {name: 'Ajay',hobbies: Array(2)}

// Spread in objects

var newStudent = {
  ...students,
  age:28
}

console.log(newStudent)