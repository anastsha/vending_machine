let storage = {cola: 5, fanta: 5, sprite: 5, aqua: 5};
let coins = {eur2: 10, eur1: 10, cent50: 10, cent20: 10, cent10: 10};
let price = {cola: 2, fanta: 2, sprite: 2, aqua: 1.5};
let bevname = "";
let full_name = "";
let restmoney = 0;
const nominals = [2, 1, 0.5, 0.2, 0.1];
let sum = 0;
let i = 0;
let comparing_sum = 0;
let refund_coins = [];


function Colachoice() {
    Clean();
    bevname = "cola";
    full_name = "Coca-cola";
    Choice();
}

function Fantachoice() {
    Clean();
    bevname = "fanta";
    full_name = "Fanta";
    Choice();
}

function Spritechoice() {
    Clean();
    bevname = "sprite";
    full_name = "Sprite";
    Choice();
}

function Aquachoice() {
    Clean();
    bevname = "aqua";
    full_name = "Mineral water";
    Choice();
}

function Choice() {
    if (storage[bevname] === 0) {
        document.getElementById("display").value = "Choose anything else";
    } else {
        restmoney = price[bevname];
        document.getElementById("display").value=full_name + "   " + price[bevname] + " eur";
    }
}

function Insertmoney() {
    let insertedmoney = document.getElementById("money").value;
    switch (insertedmoney) {
        case "eur2":
            coins.eur2 = coins.eur2 + 1;
            restmoney -= 2;
            document.getElementById("eur2").value = coins.eur2;
            break;
        case "eur1":
            coins.eur1 = coins.eur1 + 1;
            restmoney -= 1;
            document.getElementById("eur1").value = coins.eur1;
            break;
        case "cent50":
            coins.cent50 = coins.cent50 + 1;
            restmoney -= 0.50;
            document.getElementById("c50").value = coins.cent50;
            break;
        case "cent20":
            coins.cent20 = coins.cent20 + 1;
            restmoney -= 0.20;
            document.getElementById("c20").value = coins.cent20;
            break;
        case "cent10":
            coins.cent10 = coins.cent10 + 1;
            restmoney -= 0.10;
            document.getElementById("c10").value = coins.cent10;
            break;
        default:
            restmoney;
    }
    if (restmoney > 0) {
        document.getElementById("display").value="Insert more" + "  " + restmoney.toFixed(1) + " eur";
    } else if (restmoney == 0) {
        document.getElementById("display").value="Take your beverage";
        Dispensing(bevname);
    } else {
        let refund = Math.abs(restmoney);
        document.getElementById("display").value="Money back" + "  " + refund.toFixed(1) + " eur";
        Moneyback(refund);
    } 
}

function Moneyback(refund) {
    let number_coins = Object.values(coins);
    for (;nominals[i];) {
        comparing_sum = sum + nominals[i];
        while (comparing_sum <= refund && number_coins[i] > 1) {
            sum = sum + nominals[i];
            refund_coins.push(nominals[i]);
            comparing_sum = sum + nominals[i];
        }
        if (sum === refund) {
            break;
        }
        i++;
    }
    let txt = "";
    refund_coins.forEach(valueToText);
    document.getElementById("moneyback").value = txt;

    
    function valueToText(value, index, array) {
        switch (value) {
            case 2:
                txt += "2 eur  ";
                coins.eur2 = coins.eur2 - 1;
                document.getElementById("eur2").value = coins.eur2;
                break;
            case 1:
                txt += "1 eur  ";
                coins.eur1 = coins.eur1 - 1;
                document.getElementById("eur1").value = coins.eur1;
                break;
            case 0.5:
                txt += "50 c  ";
                coins.cent50 = coins.cent50 + 1;
                document.getElementById("c50").value = coins.cent50;
                break;
            case 0.2:
                txt += "20 c  ";
                coins.cent20 = coins.cent20 + 1;
                document.getElementById("c20").value = coins.cent20;
                break;
            case 0.1:
                txt += "10 c  ";
                coins.cent10 = coins.cent10 + 1;
                document.getElementById("c10").value = coins.cent10;
                break;
        }    
    }
    document.getElementById("display").value = "Take your beverage";
    Dispensing(bevname);
}

function Dispensing(bevname){
    storage[bevname] = storage[bevname] - 1;
    document.getElementById("beverage").value = full_name;
    switch (bevname) {
        case "cola":
            document.getElementById("colastrg").value = storage[bevname];
            break;
        case "fanta":
            document.getElementById("fantastrg").value = storage[bevname];
            break;
        case "sprite":
            document.getElementById("spritestrg").value = storage[bevname];
            break;
        case "aqua":
            document.getElementById("aquastrg").value = storage[bevname];
            break;
    }  
}

function Clean() {
    bevname = "";
    full_name = "";
    restmoney = 0;
    sum = 0;
    i = 0;
    comparing_sum = 0;
    refund_coins = [];
    document.getElementById("beverage").value = "";
    document.getElementById("display").value = "";
    document.getElementById("moneyback").value = "";
}







