
const btn = document.getElementById('btn');


btn.addEventListener('click', () =>{

    document.body.style.background = ciao();
    console.log(ciao());
})


function ciao(){

    return `hsl(${Math.floor(Math.random()*660)}, 100%, 30%)`
}






























/* 
const btn = document.getElementById('btn');



btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    console.log(randomBg());
});


function randomBg(){

    return `hsl(${Math.floor(Math.random()* 260)}, 100% , 50%)`
}
  


var x= Math.floor(Math.random()* 260);
console.log(x); */