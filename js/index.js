const marks = document.getElementsByClassName('marks')[0]
const elHour = document.getElementById('hour')
const elMinute = document.getElementById('minute')
const elSecond = document.getElementById('second')
const elText = document.getElementById('text')

const clock = () => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    
    elHour.style.transform = `rotate(${hour*30+90}deg)`
    elMinute.style.transform = `rotate(${minute*6+90}deg)`
    elSecond.style.transform = `rotate(${second*6+90}deg)`
    
    // elText.innerText = `${hour.toString().padStart(2, 0)} : ${minute.toString().padStart(2, 0)} : ${second.toString().padStart(2, 0)}`
}
setInterval(clock, 1000)
clock()
