//variáveis do Ator
let xVaquinha = 683;
let yVaquinha = 580;
let colisao = false;
let meusPontos = 0;

//Movimento Ator

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    yVaquinha += 5
  }
  if (keyIsDown(RIGHT_ARROW)){
    xVaquinha += 5
  }
  if (keyIsDown(LEFT_ARROW)){
    xVaquinha -= 5
  }
}
function VoltaDoInicio (){
  if (yVaquinha < 0 || yVaquinha > 575){
      voltaInicioY();  
  }
  if (xVaquinha > 1366 || xVaquinha < -5){
      voltaInicioX();
    }
}
function colisaoComCarros(){
  for (i = 0; i < imagemCarros.length; i ++){
   colisao =  collideRectCircle(xCarros[i],yCarros[i], wCarros[i], hCarros[i], xVaquinha, yVaquinha, 30 )
    if (colisao){
      voltaInicioY();
      voltaInicioX();
      somColisao.play();
      if (placarZerado()){
        meusPontos -= 1;
      }
    }
  }
} 
function voltaInicioY(){
  yVaquinha = 575;
}
function voltaInicioX(){
  xVaquinha = 683;
}
function incluirPontos(){
  textAlign(CENTER)
  textSize(30)  
  stroke(210, 0, 0)
  fill(210, 0, 0)
  text(meusPontos, width /5, 30);
}
function placar(){
  if (yVaquinha < 1){
    meusPontos += 1
    somPontos.play();
  }
}
function placarZerado(){
 return  meusPontos > 0;
}