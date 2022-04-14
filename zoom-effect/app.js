

const container = document.getElementById('container');
const img = document.querySelector('img');

container.addEventListener('mousemove' , (e) =>{

  const x = e.clientX -e.target.offsetLeft;
  const y = e.clientY -e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = 'scale(1.8)';

});



container.addEventListener('mouseleave' , () =>{

  img.style.transformOrigin = `center center`;
  img.style.trasform = 'scale(1.0)';
})
































/* const container = document.getElementById('container');
const img = document.querySelector('img');


container.addEventListener('mousemove' , (e) =>{

  const x = e.clientX -e.target.offsetLeft;
  const y = e.clientY -e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = 'scale(1.2)';
});

container.addEventListener('mouseleave', () =>{
  img.style.transformOrigin = `center center`;
  img.style.transform = 'scale(1)';
});

 */