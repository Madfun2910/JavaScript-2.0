function text(){
    var water = document.querySelector("div > p.water2");
    var coffee = document.querySelector("div > p.coffee2");
  
    water.innerHTML = textWater;
    coffee.innerHTML = textCoffee;       
   
}
var textWater = 500;
var textCoffee= 100;
//АМЕРИКАНО
var AmericanoWater = 250;
var AmericanoCoffee = 10;
//ЭСПРЕСС
var EspressoWater = 100;
var EspressoCoffee = 10;
// ДВОЙНОЙ ЭСПРЕССО
var Espresso2Water = 200;
var Espresso2Coffee = 20;
//ФУНКЦИЯ ДЛЯ КНОПКИ АМЕРИКАНО
function americano(){
    if(textWater<250){
        alert("Необходимо добавить воду, нажмите Fill Water");
        return;
        
    }
        textWater=textWater- AmericanoWater;
     
        if(textCoffee<10){
            alert("Необходимо добавить кофе, нажмите Fill Coffee");
            return;
        }
        textCoffee=textCoffee-AmericanoCoffee;
       
        text();
    }  
    

//ФУНКЦИЯ ДЛЯ КНОПКИ ЭСПРЕССО
function espresso(){
    if(textWater<100){
        alert("Необходимо добавить воду, нажмите Fill Water");
        return;
}
        textWater=textWater-EspressoWater;
        if(textCoffee<10){
            alert("Необходимо добавить кофе, нажмите Fill Coffee");
            return;
        }
        textCoffee=textCoffee-EspressoCoffee;
        
         text();           
        
    }


//Функция для кнопки 2xESPRESSO
function espresso2(){
    if(textWater<200){
        alert("Необходимо добавить воду, нажмите Fill Water");
       return;
}
        textWater=textWater-Espresso2Water;
        if(textCoffee<20){
            alert("Необходимо добавить кофе, нажмите Fill Coffee");
            return;
        }
        textCoffee=textCoffee-Espresso2Coffee;
        
        text();
}

function fillWater(){
    textWater = 500;
    text();
}

function fillCoffee(){
    textCoffee=100;
    text();
}
