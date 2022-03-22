let cabecalho = document.querySelector('.textCargo h1');
let cargo = document.querySelector('.textCargo h2')
let infoCandidato = document.querySelector('.textCampo');
let aviso = document.querySelector('.textInfo');
let imgLateral = document.querySelector('.ladoDireito');
let campo = document.querySelector('.campo');
let newVoto = document.querySelector('.newVotos')


let etapaAtual = 0;
let numero = '';

function iniciarVotacao() {
    let etapa = etapasVotacao[etapaAtual];
    let numeroHtml = '';

    for(let i = 0; i < etapa.numeros; i++) {
        if (i === 0 ) {
            numeroHtml += '<div class="cp pisca"></div>';
        } else {
            numeroHtml += '<div class="cp"></div>';
        }
        
    }

    cabecalho.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    infoCandidato.innerHTML = '';
    aviso.style.display = 'none'
    imgLateral.innerHTML = '';
    campo.innerHTML = numeroHtml;
    newVoto.style.display = 'none';
}
function realoadInterface() {

}

function clicou (n) {
    let Elnumero = document.querySelector('.cp.pisca')
    if(Elnumero !== null) {
        Elnumero.innerHTML = n;
        numero =`${numero}${n}`;

        Elnumero.classList.remove('pisca')
        if(Elnumero.nextElementSibling !== null){
            Elnumero.nextElementSibling.classList.add('pisca')
        }

    }
}   

iniciarVotacao();