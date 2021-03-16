
//1 crear doc html i js 
function changeColor() {
    let h2 = document.querySelectorAll('h2');
    h2.forEach( element => {
        element.style.color = 'blue';
    })
 };

changeColor();

//2
document.addEventListener('click', () => {
    let saludo = document.getElementById("#");
    let mensaje = "Hola";
    alert(mensaje);
});

//en un alte full

function colorRandom() {
    return `rgb( ${Math.floor(Math.random() * (255-0) ) + 0},${Math.floor(Math.random() * (255-0) ) + 0}, ${Math.floor(Math.random() * (255-0) ) + 0})`;
}

document.addEventListener('click', () => {
    let changeBoton = document.querySelectorAll("button");
    document.body.style.backgroundColor = colorRandom();
});

