// Duas const vinculando classes mario e pipe à variavéis 
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    //mario + método add vinculando jump
    mario.classList.add('jump');

    //Tempo da ação setTimeout (função, tempo 700ms)
    setTimeout(() => {
        //Parar de pular, remover jump do mario
        mario.classList.remove('jump')

    }, 700);
}


// Loop de verificação se o jogo acabou ou não (perdeu, ganhou)
//setInterval(função anônima, tempo 10ms)
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    // Checagem de altura do mario jump, o + está convertendo string da altura do jump de string para número, replace excluindo texto 'px'
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    //                              FIM DE JOGO
    //120 sendo a distância mínima entre mario e o pipe, e 80 a altura mínima entre mario gif e pipe, o jogo deve acabar caso mario e pipe colidam, checado a cada 10ms:
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        //Pipe para onde encostou
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        //Animação do mario acaba onde encostou
        mario.style.animation = `none`;
        mario.style.bottom = `${marioPosition}px`

        //Substituição de img quando mario morre e resizing
        mario.src = 'imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'

        //Quando acaba o jogo, o loop de checagem para de rodar
        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump)