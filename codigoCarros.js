//Variável dos carros
let yCarros = [75, 160, 245, 500, 330, 415];
let velocidadeCarros =[5, 4, 2.75, 6, 7, 4.5];
let xCarros = [1200, 1370, 500, 700, 1400, 650];
let wCarros = [80, 80, 80, 80, 80, 80];
let hCarros = [40, 40, 40, 40, 40, 40];


function movimentoCarros(){
  for (let i = 0; i < imagemCarros.length; i ++){
  xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaDosCarros (){
  for (let i = 0; i < imagemCarros.length; i ++){
    if (passouTodoCarro(xCarros[i])){
    xCarros[i] = 1370;
  }
}
}
function passouTodoCarro(xCarros){
  return xCarros < -60;
}