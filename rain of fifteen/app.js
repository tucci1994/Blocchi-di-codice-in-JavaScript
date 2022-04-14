
function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = ' ';
    heart.style.left = Math.random() * 100 +'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.body.appendChild(heart);
}

setInterval(createHeart,500);




