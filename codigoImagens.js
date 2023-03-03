//Incluindo sons e Imagens
let imagemCarroVerde;
let imagemCarroCinza;
let imagemCarroAmarelo;
let imagemEstrada;
let imagemVaquinha;

let somPontos;
let somTrilha;
let somColisao;

//Upload sons e imagens
function preload (){
imagemCarroVerde = loadImage("imagens/carro-1.png");
imagemCarroCinza = loadImage("imagens/carro-2.png");
imagemCarroAmarelo = loadImage("imagens/carro-3.png");
imagemEstrada = loadImage("imagens/estrada.png");
imagemVaquinha = loadImage("imagens/ator-1.png");
imagemCarros = [imagemCarroAmarelo,imagemCarroVerde, imagemCarroCinza, imagemCarroCinza, imagemCarroAmarelo, imagemCarroVerde];
somTrilha = loadSound("sons/trilha.mp3");
somColisao = loadSound("sons/colidiu.mp3");
somPontos = loadSound("sons/pontos.wav");
}

function mostrarCarros(){
  for (let i = 0; i < imagemCarros.length; i ++){
  image(imagemCarros[i], xCarros[i], yCarros[i], wCarros[i], hCarros[i]);
  }
}
function mostrarAtor(){
  image(imagemVaquinha, xVaquinha, yVaquinha, 30, 30)
}
