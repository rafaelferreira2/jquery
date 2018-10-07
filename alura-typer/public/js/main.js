var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    botao = $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
});

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}


function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


function inicializaContadores() {
    campo.on("input", function(){
        var qtdpalavras   = campo.val().split(/\s+/).length -1;
        $("#contador-palavras").text(qtdpalavras);
        var qtdcaracteres = campo.val().length;
        $("#contador-caracteres").text(qtdcaracteres);
    });
}


function inicializaCronometro() {
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();

        $("#botao-reiniciar").attr("disabled",true);
        var IdCronometro = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(IdCronometro);
                $("#botao-reiniciar").attr("disabled", false);
                finalizaJogo();
            }
        },1000);
    });
}


function finalizaJogo(){
    campo.attr("disabled", true);
   
    campo.toggleClass("campo-desativado");
    inserePlacar();
}


function inicializaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();

        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });

}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}