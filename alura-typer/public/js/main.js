var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
    var qtdpalavras   = campo.val().split(/\s+/).length -1;
    $("#contador-palavras").text(qtdpalavras);

    var qtdcaracteres = campo.val().length;
    $("#contador-caracteres").text(qtdcaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){

    var IdCronometro = setInterval(function(){
        tempoRestante--;

        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(IdCronometro);
        }
    },1000);

});