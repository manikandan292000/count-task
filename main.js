var count = 0;
let interval;
document.getElementById("start").addEventListener("click", start);
function start() {
    clearInterval(interval);
    interval = setInterval(function () {
        console.log(count);
        count += 1
        document.getElementById("count").textContent = count
    }, 1000)
    
}


document.getElementById("stop").addEventListener("click", stop)
function stop() {
    clearInterval(interval);
}

document.getElementById("Resume").addEventListener("click", start)



document.getElementById("Reset").addEventListener("click", Reset)
function Reset() {
    clearInterval(interval)
    count=0
    document.getElementById("count").textContent = count;
    stop();
}


