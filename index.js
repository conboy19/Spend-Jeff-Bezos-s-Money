var Money
Money = 198900000000
var Persentage
var PersentageBar
var Total = 0
var FLipFlops = 0
var Coffee = 0 
var LightBulb = 0
var IphoneCable = 0
var Netflix = 0
var Ipad = 0
var Bike = 0
var Iphone = 0
var Kia = 0
var Rolex = 0 
var Wine = 0
var Ferrari = 0
var Camper = 0
var Plane = 0
var Mansion = 0
var Yacht = 0
var Car = 0
var Jet = 0
var Skyscraper = 0
var Lisa = 0
var Cheeseburger = 0
Calc()
function Set() {
    document.getElementById("Ammount").innerHTML = "$" + Money;
    Persentage = (Money / 198900000000) * 100
    CheckPrice()
}
function CheckPrice() {
        // FLip Flops
        if (Money < 3) {
        document.getElementById("Buy-Flip-Flops").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Flip-Flops").style.cursor = "not-allowed";
        }
        // Coffee
        if (Money < 5) {
        document.getElementById("Buy-Coffee").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Coffee").style.cursor = "not-allowed";
        }
        // Light Bulb
        if (Money < 10) {
        document.getElementById("Buy-Light-Bulb").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Light-Bulb").style.cursor = "not-allowed";
        }
        // Iphone Cable
        if (Money < 30) {
        document.getElementById("Buy-Iphone-Cord").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Iphone-Cord").style.cursor = "not-allowed";
        }
        // Netflix
        if (Money < 168) {
        document.getElementById("Buy-Netflix").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Netflix").style.cursor = "not-allowed";
        }
        // Ipad
        if (Money < 329) {
        document.getElementById("Buy-Ipad").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Ipad").style.cursor = "not-allowed";
        }
        // Iphone 12
        if (Money < 829) {
            document.getElementById("Buy-Iphone").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Iphone").style.cursor = "not-allowed";
        }
        // Bike
        if (Money < 1000) {
            document.getElementById("Buy-Bike").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Bike").style.cursor = "not-allowed";
        }
        // Used Kia
        if (Money < 5000) {
            document.getElementById("Buy-Kia").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Kia").style.cursor = "not-allowed";
        }
        // Rolex
        if (Money < 12000) {
            document.getElementById("Buy-Rolex").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Rolex").style.cursor = "not-allowed";
        }
        // Wine
        if (Money < 20000) {
            document.getElementById("Buy-Wine").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Wine").style.cursor = "not-allowed";
        }
        // Ferrari
        if (Money < 200000) {
            document.getElementById("Buy-Ferrari").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Ferrari").style.cursor = "not-allowed";
        }
        // Camper
        if (Money < 3000000) {
            document.getElementById("Buy-Camper").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Camper").style.cursor = "not-allowed";
        }
        // Plane
        if (Money < 20000000) {
            document.getElementById("Buy-Plane").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Plane").style.cursor = "not-allowed";
        }
        // Mansion
        if (Money < 25000000) {
            document.getElementById("Buy-Mansion").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Mansion").style.cursor = "not-allowed";
        }
        // Car
        if (Money < 21000000) {
            document.getElementById("Buy-Car").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Car").style.cursor = "not-allowed";
        }
        // Yacht
        if (Money < 200000000) {
            document.getElementById("Buy-Yacht").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Yacht").style.cursor = "not-allowed";
        }
        // Jet
        if (Money < 400000000) {
            document.getElementById("Buy-Jet").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Jet").style.cursor = "not-allowed";
        }
        // Skyscraper
        if (Money < 1000000000) {
            document.getElementById("Buy-Skyscraper").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Skyscraper").style.cursor = "not-allowed";
        }
        // Mona Lisa
        if (Money < 860000000) {
            document.getElementById("Buy-Lisa").style.backgroundColor = "lightgray";
            document.getElementById("Buy-Lisa").style.cursor = "not-allowed";
        }
}
function BuyLightBulb() {
    if (Money - 10 >= 0)
    Money -= 10
    Set()
    LightBulb += 1
    Total += 10
    document.getElementById("Light-Bulb-Price").innerHTML = "$10 X " + LightBulb;
    document.getElementById("Total-Light-Bulbs-Price").innerHTML = "$" + LightBulb * 10
    document.getElementById("Total-Light-Bulbs-QTY").innerHTML = LightBulb;
    document.getElementById("Total-Light-Bulbs").style.display = "flex";
    Calc()
}
function BuyCoffee() {
    if (Money - 5 >= 0) {
    Money -= 5
    Set()
    Coffee += 1
    Total += 5
    document.getElementById("Coffee-Price").innerHTML = "$5 X " + Coffee;
    document.getElementById("Total-Coffee-QTY").innerHTML = Coffee;
    document.getElementById("Total-Coffee-Price").innerHTML = "$" + Coffee * 5;
    document.getElementById("Total-Coffee").style.display = "flex";
    Calc()
    }
}
function BuyFlipFlops() {
    if (Money - 3 >= 0) {
    Money -= 3
    Set()
    Total += 3
    FLipFlops += 1
    document.getElementById("Flip-Flop-Price").innerHTML = "$3 X " + FLipFlops;
    document.getElementById("Total-Flip-Flops-QTY").innerHTML = FLipFlops;
    document.getElementById("Total-Flip-Flops-Price").innerHTML = "$" + FLipFlops * 3;
    document.getElementById("Total-Flip-Flops").style.display = "flex"
    Calc()
    }
}
function BuyIphoneCord() {
    if (Money - 30 >= 0) {
    Money -= 30
    Set()
    IphoneCable += 1
    Total += 30
    document.getElementById("Iphone-Cable-Price").innerHTML = "$30 X " + IphoneCable;
    document.getElementById("Total-Iphone-Cable-QTY").innerHTML = IphoneCable;
    document.getElementById("Total-Iphone-Cable-Price").innerHTML = "$" + IphoneCable * 30;
    document.getElementById("Total-Iphone-Cable").style.display = "flex";
    Calc()
    }
}
function BuyNetflix() {
    if (Money - 168 >= 0) {
    Money -= 168
    Set()
    Netflix += 1
    Total += 168
    document.getElementById("Netflix-Price").innerHTML = "$168 X " + Netflix;
    document.getElementById("Total-Netflix-Price").innerHTML = "$" + Netflix * 168
    document.getElementById("Total-Netflix-QTY").innerHTML = Netflix;
    document.getElementById("Total-Netflix").style.display = "flex";
    Calc()
    }
}
function BuyIpad() {
    if (Money - 329 >= 0) {
    Money -= 329
    Set()
    Ipad += 1
    Total += 329
    document.getElementById("Ipad-Price").innerHTML = "$329 X " + Ipad;
    document.getElementById("Total-Ipad-QTY").innerHTML = Ipad;
    document.getElementById("Total-Ipad-Price").innerHTML = "$" + Ipad * 329;
    document.getElementById("Total-Ipad").style.display = "flex";
    Calc()
    }
}
function BuyBike() {
    if (Money - 1000 >= 0) {
    Money -= 1000
    Set()
    Bike += 1
    Total += 1000
    document.getElementById("Bike-Price").innerHTML = "$1000 X " + Bike;
    document.getElementById("Total-Bike-QTY").innerHTML = Bike;
    document.getElementById("Total-Bike-Price").innerHTML = "$" + Bike * 1000
    document.getElementById("Total-Bike").style.display = "flex";
    Calc()
    }
}
function BuyIphone() {
    if (Money - 829 >= 0) {
    Money -= 829
    Set()
    Iphone += 1
    Total += 829
    document.getElementById("Iphone-Price").innerHTML = "$829 X " + Iphone;
    document.getElementById("Total-Iphone-QTY").innerHTML = Iphone;
    document.getElementById("Total-Iphone-Price").innerHTML = "$" + Iphone * 829
    document.getElementById("Total-Iphone").style.display = "flex";
    Calc()
    }
}
function BuyKia() {
    if (Money - 5000 >= 0) {
        Money -= 5000
        Set()
        Kia += 1
        Total += 5000
        document.getElementById("Kia-Price").innerHTML = "$5,000 X " + Kia;
        document.getElementById("Total-Kia-QTY").innerHTML = Kia;
        document.getElementById("Total-Kia-Price").innerHTML = "$" + Kia * 5000;
        document.getElementById("Total-Kia").style.display = "flex";
        Calc()
    }
}
function BuyRolex() {
    if (Money - 12000 >= 0) {
        Money -= 12000
        Set()
        Rolex += 1
        Total += 12000
        document.getElementById("Rolex-Price").innerHTML = "$12,000 X " + Rolex;
        document.getElementById("Total-Rolex-QTY").innerHTML = Rolex;
        document.getElementById("Total-Rolex-Price").innerHTML = "$" + Rolex * 12000;
        document.getElementById("Total-Rolex").style.display = "flex";
        Calc()
    }
}
function BuyWine() {
    if (Money - 20000 >= 0) {
        Money -= 20000
        Set()
        Wine += 1
        Total += 20000
        document.getElementById("Wine-Price").innerHTML = "$20,000 X " + Wine;
        document.getElementById("Total-Wine-QTY").innerHTML = Wine;
        document.getElementById("Total-Wine-Price").innerHTML = "$" + Wine * 20000;
        document.getElementById("Total-Wine").style.display = "flex";
        Calc()
    }
}
function BuyFerrari() {
    if (Money - 200000 >= 0) {
        Money -= 200000
        Set()
        Ferrari += 1
        Total += 200000
        document.getElementById("Ferrari-Price").innerHTML = "$200,000 X " + Ferrari;
        document.getElementById("Total-Ferrari-QTY").innerHTML = Ferrari;
        document.getElementById("Total-Ferrari-Price").innerHTML = "$" + Ferrari * 200000;
        document.getElementById("Total-Ferrari").style.display = "flex";
        Calc()
    }
}
function BuyCamper() {
    if (Money - 3000000 >= 0) {
        Money -= 3000000
        Set()
        Camper += 1
        Total += 3000000
        document.getElementById("Camper-Price").innerHTML = "3 Million X " + Camper;
        document.getElementById("Total-Camper-QTY").innerHTML = Camper;
        document.getElementById("Total-Camper-Price").innerHTML = "$" + Camper * 3000000;
        document.getElementById("Total-Camper").style.display = "flex";
        Calc()
    }
}
function BuyPrivatePlane() {
    if (Money - 20000000 >= 0) {
        Money -= 20000000
        Set()
        Plane += 1
        Total += 20000000
        document.getElementById("Plane-Price").innerHTML = "20 Million X " + Plane;
        document.getElementById("Total-Plane-QTY").innerHTML = Plane;
        document.getElementById("Total-Plane-Price").innerHTML = "$" + Plane * 20000000;
        document.getElementById("Total-Plane").style.display = "flex";
        Calc()
    }
}
function BuyMansion() {
    if (Money - 25000000 >= 0) {
        Money -= 25000000
        Set()
        Mansion += 1
        Total += 25000000
        document.getElementById("Mansion-Price").innerHTML = "25 Million X " + Mansion;
        document.getElementById("Total-Mansion-QTY").innerHTML = Mansion;
        document.getElementById("Total-Mansion-Price").innerHTML = "$" + Mansion * 25000000;
        document.getElementById("Total-Mansion").style.display = "flex";
        Calc()
    }
}
function BuyYacht() {
    if (Money - 200000000 >= 0) {
        Money -= 200000000
        Set()
        Yacht += 1
        Total += 200000000
        document.getElementById("Yacht-Price").innerHTML = "200 Million X " + Yacht;
        document.getElementById("Total-Yacht-QTY").innerHTML = Yacht;
        document.getElementById("Total-Yacht-Price").innerHTML = "$" + Yacht * 200000000;
        document.getElementById("Total-Yacht").style.display = "flex";
        Calc()
    }
}
function BuyCar() {
    if (Money - 21000000 >= 0) {
        Money -= 21000000
        Set()
        Car += 1
        Total += 21000000
        document.getElementById("Car-Price").innerHTML = "21 Million X " + Car;
        document.getElementById("Total-Car-QTY").innerHTML = Car;
        document.getElementById("Total-Car-Price").innerHTML = "$" + Car * 21000000;
        document.getElementById("Total-Car").style.display = "flex";
        Calc()
    }
}
function BuyJet() {
    if (Money - 400000000 >= 0) {
        Money -= 400000000
        Set()
        Jet += 1
        Total += 400000000
        document.getElementById("Jet-Price").innerHTML = "400 Million X " + Jet;
        document.getElementById("Total-Jet-QTY").innerHTML = Jet;
        document.getElementById("Total-Jet-Price").innerHTML = "$" + Jet * 400000000;
        document.getElementById("Total-Jet").style.display = "flex";
        Calc()
    }
}
function BuySkyscraper() {
    if (Money - 1000000000 >= 0) {
        Money -= 1000000000
        Set()
        Skyscraper += 1
        Total += 1000000000
        document.getElementById("Skyscraper-Price").innerHTML = "1 Billion X " + Skyscraper;
        document.getElementById("Total-Skyscraper-QTY").innerHTML = Skyscraper;
        document.getElementById("Total-Skyscraper-Price").innerHTML = "$" + Skyscraper * 1000000000;
        document.getElementById("Total-Skyscraper").style.display = "flex";
        Calc()
    }
}
function BuyLisa() {
    if (Money - 860000000 >= 0 && Lisa == 0) {
        Money -= 860000000
        Set()
        Lisa += 1
        Total += 860000000
        document.getElementById("Buy-Lisa").style.backgroundColor = "lightgray";
        document.getElementById("Buy-Lisa").style.cursor = "not-allowed";
        document.getElementById("Total-Lisa-QTY").innerHTML = Lisa;
        document.getElementById("Total-Lisa-Price").innerHTML = "$" + Lisa * 860000000;
        document.getElementById("Total-Lisa").style.display = "flex";
        Calc()
    }
}
function BuyCheeseburger() {
    if (Money - 1 >= 0) {
        Money -= 1
        Set()
        Cheeseburger += 1
        Total += 1
        document.getElementById("Cheeseburger-Price").innerHTML = "$1 X " + Cheeseburger;
        document.getElementById("Total-Cheeseburger-QTY").innerHTML = Cheeseburger;
        document.getElementById("Total-Cheeseburger-Price").innerHTML = "$" + Cheeseburger * 1;
        document.getElementById("Total-Cheeseburger").style.display = "flex";
        Calc()
    }
}


function Calc() {
    document.getElementById("Final-Math").innerHTML = "$198900000000 - $" + Total + " = $" + Money;
    document.getElementById("Final-Text").innerHTML = "Final Value: $" + Money;
    document.getElementById("Total-Price").innerHTML = "$" + Total;
    if (Money == 0) {
        YouWon()
    }
}
function CloseWon() {
    location.reload()
}
function YouWon() {
    document.getElementById("You-Won").style.display = "block"
    document.getElementById("Top-Bar").style.display = "none";
    document.getElementById("Row-One").style.display = "none";
    document.getElementById("Row-Two").style.display = "none";
    document.getElementById("Row-Three").style.display = "none";
    document.getElementById("Row-Four").style.display = "none";
    document.getElementById("Row-Five").style.display = "none";
    document.getElementById("Row-Six").style.display = "none";
    document.getElementById("Row-Seven").style.display = "none";
    document.getElementById("Close-Button").style.display = "block";

}

function Bug() {
    window.location.replace("https://github.com/conboy19/Spend-Jeff-Bezos-s-Money/issues")
}