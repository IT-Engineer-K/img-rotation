var img = document.getElementById('img');
var deg = 0;
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var alpha = event.alpha;
    img.style.transform = `rotate(${alpha}deg)`;
}
const update = () => {
    deg++;
    if (deg == 360)
        deg = 0
}
setInterval(update, 10)