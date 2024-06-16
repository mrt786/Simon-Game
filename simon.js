let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let score = 0,highscore = 0;
let color = ["red","green","blue","yellow"]
let sqBox = document.querySelectorAll('div div')
let btn = document.querySelector('div button')
let h1 = document.querySelector('main h1')
let h2 = document.querySelector('main h2')
h1 = h1.nextElementSibling
btn.addEventListener('click',function(){
    if (!start )
    {
        start = true;
        level ++;
        btn.style.backgroundColor = "purple"
        setTimeout(function(){
            btn.style.backgroundColor = "black"
        },2000)
        levelUp()
    }    
})
function reset()
{
    level = 0
    h2.innerText = "LEVEL 1"
    start = false
    gameSeq = []
    score = 0
    let body = document.querySelector('body')
    body.style.backgroundColor = "red";
    setTimeout(function(){
        body.style.backgroundColor = "rgb(179, 219, 255)";
    },2000)
}
function checkSeq()
{
    if (userSeq[level-1] == gameSeq[level-1])
    {
        start = false;
        h1.innerText = "Press the black button to start the level";
        score++;
    }
    else
    {
        let temp = userSeq.length-1
        if(!(userSeq[temp] == gameSeq[temp]))
        {
            h1.innerText = `Game Over Your score is:${score}   CLick the black button to Restart `
            if(score > highscore)
            {
                highscore = score
                // h1.append(`HighScore ${highscore}`)
            }
            reset()
        }
    }
}
function levelUp()
{
    userSeq = []
    h2.innerText = `LEVEL: ${level} `
    let temp = Math.floor(Math.random()*4);
    btnFlash(sqBox[temp])
    gameSeq.push(color[temp])
    h1.innerText = "Complete the sequence to move to next level"

}
function btnFlash(div)
{
      div.classList.add('flash');
      setTimeout(function(){
        div.classList.remove('flash'),2000
      })
}
function buttonPress()
{
    btnFlash(this)
    userSeq.push(this.getAttribute('id'))
    console.dir(userSeq)
    console.dir(gameSeq)
    checkSeq()
}
for (box of sqBox) {
    box.addEventListener(('click'),buttonPress) 
}
