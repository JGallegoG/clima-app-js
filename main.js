// accedemos al contenedor principal de la app
const input = document.querySelector('.entrada')
const btnBuscar = document.querySelector('.btn')
const resultado = document.querySelector('.datosClima')
const btnReset =document.querySelector('.btn_reset')

// creamos la api-key para realizar la llamada a la api
const apiKey = 'f4c7388610cb6fb64368d7547fa3bec1'

//conversión a grados centígrados
const converKelvin = 273.15

// acción de buscar con el botón
btnBuscar.addEventListener('click', ()=> {
    const ciudad = input.value

    if(ciudad){
        getClima(ciudad)
    }
})

// acción para eleimir las búsquedas
btnReset.addEventListener('click', ()=> {
    location.reload()
})


// realizamos la llamad a la api
const getClima = (ciudad) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => datosClima(response))
        
}

// función para mostrar los datos 

const datosClima = (response) => {
    console.log(response)
    resultado.innerHTML = ''

    //crear los datos para mostrar la información
    const nombreCiudad = response.name
    const temp = response.main.temp
    const descrip = response.weather[0].description

    //creamos los elementos 
    const ciudadTitulo = document.createElement('h3')
    ciudadTitulo.classList.add('titulo_data')
    ciudadTitulo.textContent = nombreCiudad

    const tempValor = document.createElement('p')
    tempValor.classList.add('valor_data')
    tempValor.textContent = `Temperatura: ${Math.floor(temp - converKelvin)} ºC`

    const descripValor = document.createElement('p')
    descripValor.classList.add('desc_data')
    descripValor.textContent = `Situación atmosférica: ${descrip}`

    //volcamos los elementos en el DOM
    resultado.appendChild(ciudadTitulo)
    resultado.appendChild(tempValor)
    resultado.appendChild(descripValor)
}



