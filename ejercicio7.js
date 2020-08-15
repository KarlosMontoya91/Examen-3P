var arreglo = [5,6,7,8]

function setup() {
  createCanvas(400, 400);
  rota(3)
}
function rota(k){
  for(var x = 0; x<k; x++){
    arreglo.unshift(arreglo.pop())
  }
  console.log(arreglo)
}
