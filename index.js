//console.log('Hei');
//console.log('pitsa');

//window.alert('See on alarm!!!');
//window.alert('See o´pitsa!');
//document.getElementById('myH1').textContent='Hei'
//document.getElementById('myP').textContent='juust'
// kommentaar

/* kommen-
taar*/

//variables aka muutujad

//let x;
//x = 100;

//console.log(x);

//let age = 25;
//let price = 2.50;
//console.log(age);
//console.log(price);

//console.log(`You are ${age} years old`);
//console.log(`Hind on $${price}`);

// A on muutuja, mis hoiab valuet, ta on nagu it cont
//let fullName="Ringo Fedotov";
//let age=26;
//let isStudent=true;
//let lause = "Tere" + " "+ fullName + " "+ age+".";

//document.getElementById("p1").textContent= `Mu nimi on ${fullName}`;
//document.getElementById("p2").textContent=`Mu vanus on ${age}`;
//document.getElementById("p3").textContent=`Ma olen õpilane? ${isStudent}`;
//console.log(document);
//console.log(window);
//console.log(lause)

//aritmeetilised muutujad

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students **2; see on ruudus ehk astmes 2
//students = students **3; see on kuubis
//students = students % 2; leiab jäägi
//students = students % 4;
//let extraStudents = students % 3;
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students= **= 2;
//students %=2;

//students++;
//students--;

//console.log(students);


//let result = 1 + 2 * 3 + 4 ** 2;
/* arvuti teeb alguses sulgudes, siis astmed, siis korrutamine/jagamaine ja siis liitmine/lahutamine*/

//console.log(result)

//accept user input
// kerge on window prompt
//raske on html textbox

//LIHTNE

//let username;

//username = window.prompt("Mis su kasutajanimi on?");

//console.log(username);

//RASKE (indexis on ka bodys nupp jne tehtud)

//let username;

//document.getElementById("mySubmit").onclick = function (){
  //  username = document.getElementById("myText").value;
   // document.getElementById("myH1").textContent = `Heihopsti ${username}`
  //  console.log(username);
//}

// TÜÜBI MUUTMINE

//let age = window.prompt("Vana sa oled?");
//age = Number(age);
//age+=1;

//console.log(age, typeof age);

//let x = "pitsa";
//let y = "pitsa";
//let z = "pitsa";

//x = Number(x);
//y = String(y);
//z = Boolean(z)

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);


// const= variable, mida ei saa muuta peale sisestamist

//const PI = 3.14159
//let radius;
//let circumference;

//radius = window.prompt(`Siesta ringi raadius`);
//radius = Number(radius);



//document.getElementById("mySubmit").onclick = function (){
//radius = document.getElementById("myText").value;
//radius = Number(radius);
//circumference = 2 * PI * radius;
//document.getElementById("myH3").textContent = circumference +"cm";
//}

//console.log(circumference)


// matemaatika

//Math.PI

//console.log(Math.PI)

//let x = 3.21;
//let y = 2;
//let z;

//z = Math.round(x); ümardab
//z = Math.floor(x); ümardab alla
//z = Math.ceil(x); ümardab ülesse
//z = Math.trunc(x); võtab komakoha ära
//z = Math.pow(x, y); astendamine
//z = Math.sqrt(x); ruutjuur
//z = Math.log(x); logaritm
//z = Math.sin(x); siinius, koosinius ja tangens, vaheta sin con ja tan liht
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z)


//console.log(z);

//IF Käsklused

//let age = 25;

//if(age>= 18){
//  console.log("Sa oled piisavalt vana, et siia sisenenda");
//}
//else{
 // console.log("Sa pead olema vähemalt 18, et saidile tulla");
//}

//let time = 9;

//if (time < 12 ){
 // console.log("Hommikust!");
//}
//else{
 // console.log("Head pärastlõunat!")
//}

//let isStudent = false;

//if(isStudent){
//  console.log("sa oled õpilane!")
//}
//else{
//  console.log("Sa pole õpilane!")
//}

// Mitme variablega
//let age = 25;
//let hasLicense = false;

//if(age >= 18){
  //console.log("Sa oled piisavalt vana, et soita!");

  //if(hasLicense){
    //  console.log("Sul on load!");
  //}
  //else{
   // console.log("Sul pole lube!")
  //}
//}
//else{
 // console.log("Sa pead olema vähemalt 18, et omada juhilubasid!");
//}

//const myText = document.getElementById("myText");
//const mySubmit = document.getElementById("mySubmit");
//const resultElement = document.getElementById("resultElement")
//let age;


//mySubmit.onclick = function{

//age = myText.value;
//age = Number(age);

//if(age >= 100){
//resultElement.textContent = `Mees, sa oled liiga vana`
//}  
//else if(age >= 18){
 // resultElement.textContent = `Sa oled piisavalt vana, et siseneda!`;
//}
//else{
 // resultElement.textContent = `Sa pead olema vähmelat 18!`;
//}
//}

// CHECKED PROPERTY

//const myCheckBox = document.getElementById("myCheckBox");
//const visaBtn = document.getElementById("visaBtn");
//const masterCardBtn = document.getElementById("masterCardBtn");
//const payPalBtn = document.getElementById("payPalBtn");
//const mySubmit = document.getElementById("mySubmit");
//const subResult = document.getElementById("subResult");
//const paymentResult = document.getElementById("paymentResult");

//mySubmit.onclick = function(){
  //if(myCheckBox.checked){
   // subResult.textContent = `Sa oled subbinud!`;
  //}
  //else{
   // subResult.textContent = `Sa ei ole subbinud!`;
  //}

  //if(visaBtn.checked){
   // paymentResult.textContent = `Sa maksad Visaga!`
  //}
  //else if(masterCardBtn.checked){
  //  paymentResult.textContent = `Sa maksad meistrikaardiga!`
  //}
  //else if(payPalBtn.checked){
  //  paymentResult.textContent = `Sa maksad paypaliga!`
  //}
//else {
   // paymentResult.textContent = `vali maksmise tüüp!`
 // }

//}


//Temporary operator

//let age = 21;
//let message = age >= 18 ? "Sa oled täiskasvanud" : "Sa oled tatt";
//console.log(message);

//let time = 16;
//let greeting = time < 12 ? "Hommikust!" : "Head pärastlõunat!"
//console.log(greeting)

//let isStudent = true;
//let message = isStudent ? "Sa oled õpilane" : "Sa ei ole õpilane"
//console.log(message);

//let purchaseAmount = 125;
//let discount = purchaseAmount >= 100 ? 10 : 0;
//console.log(`Kogusumma on $${purchaseAmount - purchaseAmount * (discount/100)}`);

//SWITCHID

//forEach

/*let numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
numbers.forEach(tripple);
numbers.forEach(square);
function double (element, index, array){
  array[index] = element * 2;
}
function tripple (element, index, array){
  array[index] = element * 3;
}
function square(element, index, array){
  array[index] = Math.pow(element, 2);
}
function display (element){
  console.log(element);
}
*/

/*let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
  console.log(element);
} 
*/

//.map()

/*const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

const squares = numbers.map(square);

console.log(squares);

function square(element){
  return Math.pow(element, 2);
}
function square(element){
  return Math.pow(element, 3);
}*/

/*const students = ["mees", "naine", "tüdruk", "poiss"];
const studentsUpper = students.map(upperCase);
const.studentsLower= students.map(lowerCase);

console.log(studentsUpper);

function upperCase(element){
  return element.toUpperCase();
}
function lowerCase(element){
  return element.toLowerCase();
}
*/

/*const dates = ["2024-1-10", "2025-2-23", "2023-3-30"];
const formattedDates = dates.map(formattedDates);

console.log(formattedDates);

function formDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]/${parts[0]}}`;
}*/

//.filter()

/*let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);


function isEven(element){
  return element % 2 === 0;
}

function isOdd(element){
  return element % 2 !== 0;
}*/

/*const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

console.log(isAdult);

function isAdult(element){
  return element >=18;
}

function isChild(element){
  return element <=18;
}*/

/*const words = ["apple", "banana", "coconut", "pineapple"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(ShortWords);

function getShortWords(element){
  return element.length <= 6;
}

function getLongWords(element){
  return element.length >= 6;
}*/

// .reduce()

/*const prices = [3, 30, 10, 25, 8, 18];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
  return accumulator + element;
}*/

/*const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element){
  return Math.max(accumulator, element);
}*/

//function expressions

/*const hello = function(){
  console.log("Hello");
}

hello();*/

/*setTimeout(function(){
  console.log("Hello");
}, 3000);*/

/*const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function square(element){
  return Math.pow(element, 2);
});

console.log(squares);
*/

// arrow functions

/*const hello = (name) => {console.log(`Hello ${name}`)
console.log(`You are ${age} years old`)};

hello("Bro", 25);*/
//setTimeout(() => console.log("Hello"), 3000);
/*
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);*/

// OBJEKTID

//constructor

/*function Car(make, model, year, color){
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function(console.log(`You drive the ${this.model}` ))
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevy", "Camaro", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);*/

//class

/*class Product{
  constructor(name,price){
  this.name = name;
  this.price = price;
}
  this.displayProduct = function(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }

}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 39.99);

product1.displayProduct();
product2.displayProduct();*/

//Static

/*class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;
  }
  static getCircumference(radius){
    return 2 * this.PI * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));*/

//inheritance

/*class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{
  name = "rabbit";
}

const rabbit = new Rabbit();

console.log(rabbit.alive);
rabbit.eat;
rabbit.sleep;*/

//getter/setter

/*class Rectangle{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.error("Width must be a positive nr");
    }
  }
  set width(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("Height must be a positive nr");
    }
   }

   get width(){
    return `${this._width.toFixed(1)cm``};
   }

   get height(){
    return this._height;
   }

   get area(){
    return this._width * this._height;
   }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);*/


//Destructing

/*let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);*/


/*const colors = ["red", "green", "blue", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors;)*/

/* const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);*/

/*
function displayPerson({firstName, lastName, age, job}){
console.log(ǹame: $(firstName) $(lastName)`);
console.log(`age: ${age}`);
console.log(`job: ${job}`);
}
const person1 = {
firstName: "spongebob"
lastName: "Squareman"
age: 30,
job: "Fry cook"}

const person2 = {
firstName: "patrick"
lastName: "Star"
age: 34,
}

const{firstName, lastName, age, job="Unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);*/

//Nested objects

/*const person = {
  fullName: "Sponge Square",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "fishing", "cooking"],
  address:{
    street: "124 Conch st.",
    city: "Bikini",
    country: "Int. water"
  }
}

for(const property in person.address){
  console.log(person.address[property]);
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);*/

/*class Person{
  constructor(age, name, ...address){
    this.name = name;
    this.age = age;
    this.address = new Adress(...address);
  }

}

class Adress {

  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("sponge", 30, "124 conch", "bikini", "int waters");

const person 2 = new Person("patrick", 34, "128 cocnh", "bikini", "int waters");

console.log(person1.address.street);*/


/*const fruits = [{name: "apple", color: "red", calories: 95}, 
  {name: "orange", color: "orange", calories: 45},
  {name: "banana", color: "yellow", calories: 105}, 
  {name: "coconut", color: "white", calories: 159}, 
  {name: "pineapple", color: "yellow", calories: 37}];

  console.log(fruits[1].calories);

  fruits.push({name: "grapes", color: "purple", calories: 62});

  const fruitNames = fruits.map(fruit => fruit.name);

  console.log(fruitNames);*/


  //eventListener

 /* const myBox = document.getElementById("myBox");
 const myButton = document.getElementById("myButton");

function changeColor(event){
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Aia!";
}

  myBox.addEventListener("click", changeColor);

  myBox.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "yellow";
      event.target.textContent = "Ära tee!";
  })

  myBox.addEventListener("mouseout" event => {
      event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me";
  })*/

  /*const myBox = document.getElementById("myBox");
  const moveAmount = 10;
  let x = 0;
  let y = 0;

  document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow"){
      switch(event.key){
        case "ArrowUp" :
          y -= moveAmount;
          break;
        case "ArrowDown"
        y += moveAmount;
        break;
      }
    })
  })

  document.addEventListener("keydown", event =>{
    myBox.style.backgroundColor = "tomato";
  });

  document.addEventListener("keyup", event =>{
    myBox.textContent = "Jehhu";
  });*/

  /*const myButton = document.getElementById("myButton");
  const myImg = document.getElementById("myImg");

  myButton.addEventListener("click", event =>{
    
    if(myImg.style.display === "none"){
      myImg.style.display = "block";
      myButton.textContent = "Hide";
    }
    
    myImg.style.display = "none";
    myButton.textContent = "Show";
  })*/


//NodeList

/*let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
  button.style.backgroundColor = "green"; 
  button.textContent += "jess";
} )

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
  })
})*/

//classList

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {

  if(event.target.classList.contains("disabled")){
    event.target.textContent += "angery";
  }
  else{
    event.target.classList.replace("enabled", "disabled");
  }
  event.target.classList.replace("enabled", "disabled");
})

myButton.classList.add("enabled");
myButton.classList.remove("enabled");
myButton.classList.add("hover");