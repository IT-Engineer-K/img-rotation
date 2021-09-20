var img = document.getElementById('img');
var deg = 0;
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    img.style.transformStyle = "preserve-3d";
    var alpha = event.alpha;
    img.style.transform = `rotateX(${alpha}deg)`;
    var beta = event.beta;
    img.style.transform = `rotateY(${beta}deg)`;
    var gamma = event.gamma;
    img.style.transform = `rotateZ(${gamma}deg)`;
    img.style.transform = `rotate3d(${alpha/360}, ${beta/360}, ${gamma/360}, 0deg)`;
}
const update = () => {
    deg++;
}
setInterval(update, 10)