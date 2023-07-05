var lamp = window.document.getElementById('Lampada')

function estarQuebrada(){
    return lamp.src.indexOf('broken') > -1
}

function Ligar(){
    if (!estarQuebrada()){
    lamp.src = 'on.svg'}
}

function Desligar(){
    if (!estarQuebrada()){
    lamp.src = 'off.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'broken.svg'
}