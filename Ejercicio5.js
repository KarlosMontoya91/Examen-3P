function draw() {
  background(220);
  recortar(15,0,10)
}
function recortar(numero,minimo,maximo){
  
  if(numero < minimo){
    console.log(minimo)
  }
  if (numero > maximo){
    console.log(maximo)
  } 
  else {
    console.log(numero)
  }
}
