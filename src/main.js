import "./index.css";



let cookieCount = 0;
let clickPower = 1;

let cookieCounter = document.getElementById('score');
let cookie = document.getElementById('cookie');

cookieCounter.innerHTML = cookieCount;



let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
  }

let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
  }

let refreshAuto = function() {
    autoLevel.innerHTML = autoLevelNumber
    autoprice.innerHTML = autoPriceAmount;
    clickauto.innerHTML = autoPower;
    clickauto.innerHTML = autoPower - 10;
  }





// Clic base

cookie.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    cookieCounter.innerHTML = cookieCount;
  })





  // Clic boost

let clickPowerPriceAmount = 100;
let clickPowerLevelNumber = 0; 

let buyClickPower = document.getElementById('buyClick');
let clickPowerPrice = document.getElementById('clickprice');
let clickPowerLevel = document.getElementById('clicklevel');
let clickPowerMultiple = document.getElementById('clickmultiple');

buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("Item succesfully Bought");
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount()

        clickPowerLevelNumber += 1;
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.5);
        clickPower += 1;
        refreshPowerClick();
    } 
    
    else {
      console.log("You don't have enough cookies!");
    }
})


cookie.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
})





// Auto click

let autoAuto = false;

let autoPower = 10;
let autoPriceAmount = 500;
let autoLevelNumber = 0;

let buyAuto = document.getElementById('buyAuto');
let autoprice = document.getElementById('autoprice');
let autoLevel = document.getElementById('autolevel');
let clickauto = document.getElementById('clickauto');

buyAuto.addEventListener("click", function() {
    if (cookieCount >= autoPriceAmount) {
        cookieCount -= autoPriceAmount;
        refreshCookieCount()

        autoLevelNumber += 1;
        autoPriceAmount = Math.floor(autoPriceAmount * 1.5);
        autoPower += 10;
        refreshAuto();

        autoAuto = true
        autoAutoStart();
    }
})

let autoAutoStart = function() {
    let autoInt = window.setInterval(function(){
      cookieCount += autoPower;
      refreshCookieCount();
    }, 1000);
  }





 






















