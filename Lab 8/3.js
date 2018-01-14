var blackFridayCart = {
  telefon: "350",
  consola: "250",
  televizor: "450",
  iepurasPlus: "10.60",
  cercei: "20.34",
  geanta: "22.36"
};

function getCartValue(cos){
  var sum = 0;
  for(var i in cos){
    if( cos.hasOwnProperty(i)){
      sum += parseFloat(cos[i]);
    }
  }
  console.log(sum);
}

getCartValue(blackFridayCart);
