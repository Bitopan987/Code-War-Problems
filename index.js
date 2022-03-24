// for in loop only used in objects
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
} // '45491625'


const student = {
  name: 'Monica',
  class: 7,
  age: 12
}
for(let key in student){
  console.log(key)
} // name,class,age


const student = {
  name: 'Monica',
  class: 7,
  age: 12
}
for(let key in student){
  console.log(student[key])
} // Monica,7,12


// for of loop
//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
} // 'BMWVolvoMini'

// Looping over a String
const word = "language"
let text=""
for(let x of word){
  text += x
}//"language"

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
myArrayMax([1,2,6,3,5,2])  //6





// Array.from
var arr = Array.from('You are viewing an example of string');
console.log(arr);

const str = 'Apple';
const arr = Array.from(str); // same as str.split('')
console.log(arr);

// ['A', 'p', 'p', 'l', 'e']


function dontGiveMeFive(start, end)
{
 let count = 0
 for(i=start;i<=end;i++){
    count += String(i).includes("5") ? 0 : 1
  }
 return count
}

function repeatStr (n, s) {
   let str = ""
  for(i=0;i<n;i++){
    str += s
  }
 return str
}

repeatStr(3, "*") // "***"



function map(arr,cb){
   let final=[]
for(let elm of arr){
  final.push(cb(elm))
}
}

funtion multiply(num){
  return num * 2
}

// Intersection

function intersection(...arrays){
  let first= arrays[0]
  for(let i =1; i < arrays.length; i++){
    let second = arrays[0]
    first = first.filter(elm => second.includes(elm))
  }
  return first;
}

// Union

function intersection(...arrays){
  let first= arrays[0]
  for(let i =1; i < arrays.length; i++){
    let second = arrays[0]
    first = first.filter(elm => !second.includes(elm)).concat(second)
  }
  return first;
}

// Create Function {OOP}

function createUser(name,score=0){
  let user = {}
  user.name = name;
  user.score = score;
  user.increaseScore = function (val = 1){
    this.score = this.score + val
    return this.score
  }
}

let user1 = createUser("Bito",5)

console.log(user1.increaseScore(66))


2//////

let ques = {
  title:"Name of your country?",
  options: ["India","Pakistan","Chinna","USA"],
  correctIndex : 1,
  isAnsCorrect (index){
    return index === ques.correctIndex
  },
  getCorrectAns(){
    return ques.options[ques.correctIndex]
  }
}







