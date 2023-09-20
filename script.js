function OpenEditor(){
    const texto_observacao = document.getElementById('observacao');
    texto_observacao.style.display='block';
    const btn = document.getElementById('btn-send').style.display='block';
}
function Save(){
    const texto_observacao = document.getElementById('observacao').value;
    var p = document.getElementById('texto-obs').textContent=texto_observacao;

    const texto = document.getElementById('observacao');
    texto.style.display='none';
    const btn = document.getElementById('btn-send').style.display='none';
}
