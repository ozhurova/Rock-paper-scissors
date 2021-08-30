const buttonChoice = document.getElementsByTagName('input');
const gameZone_Player1 = document.getElementById('gameZone_Player1');
const gameZone_Player2 = document.getElementById('gameZone_Player2');
const gameZone_text = document.getElementById('gameZone_text');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const rock = document.querySelector( '.rock')
const paper = document.querySelector( '.paper')
const scissors = document.querySelector( '.scissors')





for(let i=0;i<buttonChoice.length; i++){
    buttonChoice[i].addEventListener('click', start)
}
    function start() {
        text_animation();
        img_animation();
        gameZone_Player1.style.display='block';
        gameZone_Player2.style.display='block';
        setTimeout(clickButtonChoice.bind(this), 3010);
    }
   

    function clickButtonChoice(){
        if(this.checked){
            let pleayer1Choice=+this.value;
            let pleayer2Choice=Math.round(Math.random()*2);
            win(pleayer1Choice, pleayer2Choice);
            gameZone_Player1.style.backgroundImage=(createImg(pleayer1Choice));
            gameZone_Player2.style.backgroundImage=(createImg(pleayer2Choice));
        }
    }

function counter(){
    let count = 0;
    return function (){
        return ++count;
    }
}
let countPlayer1 = counter();
let countPlayer2 = counter();
 


function win(pleayer1, pleayer2){ 
    if (pleayer1===0 && pleayer2===1 
        || pleayer1===1 && pleayer2===2 
        || pleayer1===2 && pleayer2===0){
        gameZone_text.textContent ='победа';
        score1.textContent=countPlayer1();
        validWin(score1.textContent, score2.textContent)
    } else if (pleayer1===0 && pleayer2===2 
        || pleayer1===1 && pleayer2===0 
        || pleayer1===2 && pleayer2===1){
        gameZone_text.textContent ='проигрыш';
        score2.textContent=countPlayer2();
        validWin(score1.textContent, score2.textContent)

    } else {gameZone_text.textContent ='Ничья'
    }    
}


function createImg(choice){
    let choiceUrl
    if (choice===0){
        choiceUrl= `url('img/rockHS.png')`;
        return choiceUrl;
    }else if (choice===1){
        choiceUrl=`url('img/scissorsHS.png')`;
        return choiceUrl;
    } else {
        choiceUrl=`url('img/paperHS.png')`;
        return choiceUrl;
    }
}

function text_animation(){
    let text = ['камень', 'ножницы', 'бумага', 'раз', 'два', 'три'];
    for (let i=0; i< text.length; i++){
        setTimeout(()=> {
            gameZone_text.textContent=text[i]; 
        }, i*500);
    }
}

function img_animation(){
    let imgUrl = [`url('img/rockHS.png')`, `url('img/scissorsHS.png')`, `url('img/paperHS.png')`,
    `url('img/rockHS.png')`, `url('img/scissorsHS.png')`, `url('img/paperHS.png')`];
    gameZone_Player1.style.minxHeight='260px';
    gameZone_Player2.style.minHeight='260px';

    for (let i=0; i< imgUrl.length; i++){
        setTimeout(()=> {
            gameZone_Player1.style.backgroundImage=imgUrl[i]; 
            gameZone_Player2.style.backgroundImage=imgUrl[i]; 
        }, i*500);
    }
}

    
function validWin(countPlayer1, countPlayer2){
    const winScore = 3
    if(+countPlayer1 === winScore ){
        setTimeout(() => {
            gameZone_text.textContent="поздравляю, Вы выиграли";
            gameZone_text.append(creatRestart())
        },500)
    } else if (+countPlayer2 === winScore ){
        setTimeout(() => {
        gameZone_text.textContent=" Вы проиграли";
        gameZone_text.append(creatRestart())
        },500)
    }
 }

function creatRestart(){
    rock.style.backgroundImage=('none');
    paper.style.backgroundImage=('none');
    scissors.style.backgroundImage=('none');
    const restart = document.createElement('button');
    restart.id = 'restart';
    restart.textContent = 'сыграем еще раз?';
    restart.addEventListener('click', function(){
        rock.style.backgroundImage=`url('img/rockHS.png')`;
        paper.style.backgroundImage=`url('img/paperHS.png')`;
        scissors.style.backgroundImage=`url('img/scissorsHS.png')`;
        gameZone_Player1.style.backgroundImage=('none');
        gameZone_Player2.style.backgroundImage=('none');
        countPlayer1 = counter();
        countPlayer2 = counter();
        score1.textContent='0';
        score2.textContent='0';
        restart.remove();
        gameZone_text.textContent='Сделайте свой выбор'

    })
    return restart
 }

















