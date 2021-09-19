let rand
let randPosition
let speed = 1000
let timerMain

start()
timeLeft()

function start() {
    timerMain = setInterval(()=>{
        rand = Math.floor(Math.random()*9)
        randPosition = '#h'+rand
        if($(randPosition).css('display') != 'none'){
            rand = Math.floor(Math.random()*9)
            $(randPosition).fadeIn(speed,()=>{
            })
        }else{
            randPosition = '#h'+rand
            $(randPosition).fadeIn(speed,()=>{
            })
        }
    },speed*1.1)

}

$(document).click((e)=>{
    if(e.target.id){
        let clickId = '#'+e.target.id
        console.log(clickId)
        $(clickId).fadeOut()       
    }

})

function timeLeft() {
    let timer = 30
    let b = setInterval(()=>{ 
        if(timer<=0){
        clearInterval(b)
        $('.time-left').text('Time Left: '+timer)
        clearInterval(timerMain)
        alert('Time is out')
        return
        }  
    $('.time-left').text('Time Left: '+timer)
    if(timer % 10 ==0){ 
      clearInterval(timerMain) 
      start()
    }
    timer--
},1000)
  
}
