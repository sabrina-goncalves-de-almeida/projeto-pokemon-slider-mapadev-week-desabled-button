const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
const quantCartoes = cartoes.length-1;
let cartaoAtual = 0;

// função para desabilitar o botão
function desabilitaBtn(btnDesabilitado){
    btnDesabilitado.disabled = true;
    btnDesabilitado.classList.add('desabilitado');
    btnDesabilitado.classList.remove('btn-seta');
};

// função para reabilitar o botão
function reabilitaBtn(btnHabilitado){
    btnHabilitado.disabled = false;
    btnHabilitado.classList.add('btn-seta');
    btnHabilitado.classList.remove('desabilitado');
};

// função que mostra o cartão
function mostrarCartao(indiceDoCartao){
    cartoes[indiceDoCartao].classList.add('selecionado');
};

/* avança para o próximo cartão, reabilita o btn-voltar ao sair do primeiro cartão 
e desabilita o btn-avancar ao chegar no ultimo cartão */
btnAvancar.addEventListener('click', function(){
    cartaoAtual++;
    btnAvancar.disabled = false;
    if(cartaoAtual<quantCartoes+1){
        reabilitaBtn(btnVoltar);
        mostrarCartao(cartaoAtual);
        cartoes[cartaoAtual-1].classList.remove('selecionado');
    }if(cartaoAtual===quantCartoes){
        cartaoAtual=quantCartoes;
        desabilitaBtn(btnAvancar);
    };
});

/* avança para o próximo cartão, reabilita o btn-avanca ao sair do último cartão 
e desabilita o btn-voltar ao voltar ao primeiro cartão */
btnVoltar.addEventListener('click', function(){
    cartaoAtual--;
    btnVoltar.disabled = false;
    if(cartaoAtual > -1){
        reabilitaBtn(btnAvancar);
        mostrarCartao(cartaoAtual);
        cartoes[cartaoAtual+1].classList.remove('selecionado');
    }if(cartaoAtual === 0) {
        cartaoAtual = 0;
        desabilitaBtn(btnVoltar);
    };
});