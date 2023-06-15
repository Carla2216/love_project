Function fuja(){
    var botaoNao=document.getElementById("nao")
    var larguraJanela=window.innerWidth;
    var alturaJanela=window.innerHeight;
    
    var maxX=larguraJanela-botaoNao.offsetWidth;
    var maxY=alturaJanela-botaoNao.offsetHeigth;
    
    var aleatorioX=Math.floor(Math.random()*maxX);
    var aleatorioY=Math.floor(Math.random()*maxY);
    botaoNao.style.left=aleatorioX+"px";
    botaoNao.style.top=aleatorioY+"px";
}
Function parabens(){
    alert("Parabéns , voce fez uma sabia escolha ;)")
}