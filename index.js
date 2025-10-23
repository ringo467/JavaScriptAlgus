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

