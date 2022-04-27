let storage = {cola: 5, fanta: 5, sprite: 5, aqua: 5};
let coins = {eur2: 10, eur1: 10, cent50: 10, cent20: 10, cent10: 10};
let price = {cola: 2, fanta: 2, sprite: 2, aqua: 1.5};
let bevname = "";
let restmoney = 0;


function Colachoice() {
    bevname = "cola";
    restmoney = price[bevname];
    // storage.cola--; //
    document.getElementById("display").value="Coca-cola" + "   " + price[bevname] + " eur";
}

function Fantachoice() {
    fantaStorage -= 1;
    document.getElementById("display").value="Fanta" + "          " + fantaPrice + " eur";
}

function Spritechoice() {
    spriteStorage -= 1;
    document.getElementById("display").value="Sprite" + "          " + spritePrice + " eur";
}

function Aquachoice() {
    aquaStorage -= 1;
    document.getElementById("display").value="Aquafina" + "     " + fantaPrice + " eur";
}

function Insertmoney() {
    let insertedmoney = document.getElementById("money").value;
    switch (insertedmoney) {
        case "eur2":
            coins.eur2++;
            restmoney -= 2;
            break;
        case "eur1":
            coins.eur1++;
            restmoney -= 1;
            break;
        case "cent50":
            coins.cent50++;
            restmoney -= 0.50;
            break;
        case "cent20":
            coins.cent20++;
            restmoney -= 0.20;
            break;
        case "cent10":
            coins.cent10++;
            restmoney -= 0.10;
            break;
        default:
            restmoney;
    }
    if (restmoney > 0) {
        document.getElementById("display").value="Insert more" + "  " + restmoney + " eur";
    } else if (restmoney == 0) {
        document.getElementById("display").value="Take your bevarage";
    } else {
        let refund = Math.abs(restmoney);
        document.getElementById("display").value="Money back" + "  " + refund + " eur";
        Moneyback();
    } 
}

function Moneyback() {
    for (let i of Object.entries(coins)) {

    }
}





