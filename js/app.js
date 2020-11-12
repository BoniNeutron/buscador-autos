// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const yearMax = new Date().getFullYear();
const yearMin = yearMax - 10;

console.log(yearMax)
console.log(yearMin)

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles al cargar

    // Llena las opciones de años
    llenarSelect();

})


// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Genera los años del select

function llenarSelect() {
    
}
