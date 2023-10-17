const start = document.getElementsByClassName('start')[0]
const stop = document.getElementsByClassName('stop')[0]

const plus = document.querySelectorAll('plus')

let stopWatch = document.getElementsByClassName('stopWatch')[0]

let sec = 0

for(let btn of plus){
    btn.addEventListener('click', () => {
        sec += btn.value
        stopWatch.innerHTML = sec
    })
}

start.addEventListener('click', () => {
    setInterval(() =>{
        stopWatch.innerHTML = `${sec--}`
    },1)
})