$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria() {

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){ // novo, escondendo o spinner
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);    
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(){
    var fraseID = $("#botao-frase-id").val();
    var dados = {id: fraseID};

    $.get("http://localhost:3000/frases",dados, trocaFrase)
}

function trocaFrase(){

}