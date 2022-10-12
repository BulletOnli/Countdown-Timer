const timer = document.querySelector('.timer')

setInterval(countdown)
function countdown() {
    const targetDate = new Date("Jan 1 2023 12:00:00").getTime();
    const dateNow = Date.now()
    const timeToCount = targetDate - dateNow

    let days = Math.floor((timeToCount / (1000 * 60 * 60 * 24)))
    let hours = Math.floor((timeToCount / (1000 * 60 * 60)) % 60)
    let minutes = Math.floor((timeToCount / (1000 * 60)) % 60)
    let seconds = Math.floor((timeToCount / 1000) % 60)
    
    days = addZero(days)
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)
    
    timer.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`

    function addZero(time) {
        time = time.toString()

        return time.length < 2 ? '0' + time : time
    }
}

