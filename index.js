let turnOn = document.getElementById("turnOn");
let turnOff = document.getElementById("turnOff");
let lamp = document.getElementById("lamp");

//pegar o click no botao ligar
//lampOn irá ser uma função para ascender a lâmpada
turnOn.addEventListener("click", lampOn);

//Esta função serve para trocar de lampada desliga para ligada
function lampOn(){
   
   if(!isLampBroken()){
    lamp.src = 'img/ligada.jpg'
   }
}



//pegar o click no botao desligar
//lampOff irá ser uma função para desligar a lâmpada
turnOff.addEventListener("click", lampOff);

function lampOff(){
   
    if (!isLampBroken ()){
    lamp.src = 'img/desligada.jpg'
    }
}


//Quebrando a lâmpada
//lampBroken irá ser uma função para quebrar a lampada
lamp.addEventListener("dblclick", lampBroken);

function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
  
}

//Fazer uma função para verificar se a lampada esta quebrada

function isLampBroken(){
    return lamp.src.indexOf("quebrada") > -1;
}

//Reutilizando o lampOn e lampOff

//mouseover = passar o mouse na lampada
lamp.addEventListener("mouseover", lampOn);

//mouseleave = sair da lampada
lamp.addEventListener("mouseleave", lampOff);




