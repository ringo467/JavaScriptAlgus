//PROGRAMM 3

function kontrolliVanust() {
    var sisend = prompt("Siseta oma vanus");
    if (sisend === "" || isNaN(sisend)) {
        alert ("Sisend pole korrektne, palun sisesta number");
        kontrolliVanust();
        return
    }

    var vanus = Number(sisend);
    if (vanus >= 7 && vanus <= 16) {
        alert("Oled p]hikooli opilane ja sood kell 10");
    } else if (vanus >= 17 && vanus <=20) {
        alert("Oled gumnaasiumi opilane ja sood kell 11");
    } else if (vanus > 20) {
        alert ("Oled taiskasvanu ja sood kell 12");
    } else {
        alert ("Oled liiga noor, et koolis olla");
    }
}

kontrolliVanust();