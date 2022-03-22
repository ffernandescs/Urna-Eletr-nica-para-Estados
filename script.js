let seuVotoPara = document.querySelector('.textCargo h1');
let cargo = document.querySelector('.textCargo h2')
let descricao = document.querySelector('.textCampo');
let aviso = document.querySelector('.textInfo');
let imageCand = document.querySelector('.ladoDireito');
let numeros = document.querySelector('.campo');

let etapaAutal = 0;
let numero = '';
let votoBranco = false



function comecarEtapa() {
    let etapa = etapas[etapaAutal];
    let numeroHtml = '';
    numero = ''
    votoBranco = false

    for(let i = 0; i < etapa.numeros; i++) {
        if (i === 0 ) {
            numeroHtml += '<div class="cp pisca"></div>';
        } else {
            numeroHtml += '<div class="cp"></div>';
        }
        
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none'
    imageCand.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAutal];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true
        } else {
            return false
        }
    });

    if (candidato.length >0 ) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'flex';
        descricao.innerHTML = `Nome: ${candidato.name}<br/>Partido: ${candidato.partido}`;
        let fotosHtml = ''
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="imgCand"><img src="./image/${candidato.fotos[i].url}" alt=""><div class="textCand"><span style="font-size: 10px; text-transform: uppercase">${candidato.fotos[i].legenda}</span></div></div>`
        }
        imageCand.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'flex';
        descricao.innerHTML = '<div class="avisoGrande pisca">VOTO NULO</div>';
    }


}

function clicou(n) {
    let elNumero = document.querySelector('.cp.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    if(numero === '') {
        votoBranco = true
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'flex';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="avisoGrande pisca">VOTO EM BRANCO</div>';
        imageCand.innerHTML = '';

    } else {
        alert('Para votar em BRANCO, não pode digitar nenhum numero')
        comecarEtapa();
    }
}

function corrige() {
    comecarEtapa()
}

function confirma() {
    let etapa = etapas[etapaAutal];

    let votoConfirme = false;

    if(votoBranco === true) {
        votoConfirme = true;
        console.log('Confirmando Branco')
    } else if(numero.length === etapa.numeros) {
        votoConfirme = true;
        console.log('Confirmando' + numero)
    }

    if(votoConfirme) {
        etapaAutal++;
        if(etapas[etapaAutal] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.prevContainer').innerHTML = `<div class="avisoGigante pisca">FIM</div>`;
        }
         
    }
}



comecarEtapa()