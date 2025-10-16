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

let username;

document.getElementById("mySubmit").onclick = function (){
    username = document.getElementById("myText").value;
    console.log(username);
}