let MensagemEnvio = 'Agradecemos o seu contato';
let formulario = document.querySelector('#form');

function apertou(){
    if (formulario.checkValidity()) {
        alert(MensagemEnvio)
}
else{
   alert('Erro 401')
}
} 

