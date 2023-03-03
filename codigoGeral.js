
function setup() {
  createCanvas(1366, 616);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarCarros();
  movimentoCarros();
  mostrarAtor();
  colisaoComCarros();
  movimentoAtor();
  VoltaDoInicio();
  movimentoCarros();
  voltaDosCarros();
  incluirPontos();
  placar();
}
