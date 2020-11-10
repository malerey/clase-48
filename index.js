// const frutas = ['🍉', '🥥', '🍋', '🥝', '🍒', '🍑']

// const obtenerNumeroAlAzar = (items) => {
//   return Math.floor(Math.random() * items.length)
// }

// const generarGrilla = (filas, columnas, items) => {

//   let grilla = []
//   for (let i = 0; i < filas; i++) {
//     grilla[i] = []  
//     for (let j = 0; j < columnas; j++) {
//       grilla[i][j] = items[obtenerNumeroAlAzar(items)]
      
//     }  
//   }
//   return grilla
// }

// console.log(generarGrilla(9, 9, frutas))




const grillaHTML = document.querySelector("#grilla");
const nuevoButton = document.querySelector("#nuevo");
const reiniciarButton = document.querySelector("#reiniciar");
const buscarMatches = document.querySelector("#buscarMatch")

const FRUTAS =  ['🍉', '🥥', '🍋', '🥝', '🍒', '🍑']
let DIFICULTAD = ''
let grilla = []

/// CREAR GRILLA /// 

const obtenerFrutaAlAzar = (frutas) => {
  return frutas[Math.floor(Math.random() * frutas.length)]
}

const generarGrilla = (tamanio) => {
  grilla = []
  for (let i = 0; i < tamanio; i++) {
    grilla[i] = []
    for (let j = 0; j < tamanio; j++) {
      grilla[i][j] = obtenerFrutaAlAzar(FRUTAS)
    }
  }
  return grilla
}


const crearGrilla = (ancho) => {
  const anchoDeGrilla = 50 * ancho
  grillaHTML.style.width = `${anchoDeGrilla}px`

  const listaDeFrutas = generarGrilla(ancho)
  grillaHTML.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      grillaHTML.innerHTML += `<div data-x="${i}" data-y="${j}">${listaDeFrutas[i][j]}</div>`
    }
  }
}

const comenzarJuego = DIFICULTAD => {
  if (DIFICULTAD === "facil") {
    crearGrilla(6)
  }
  else if (DIFICULTAD === "medio") {
    crearGrilla(8)
  }
  else if (DIFICULTAD === "dificil") {
    crearGrilla(10)
  }
  else {
    alert("No ingresaste una opcion valida :(")
  }
}


const pedirDificultad = () => {
  const pedirDificultad = prompt("Elegi una dificultad: facil, medio, dificil")
  DIFICULTAD = pedirDificultad
  comenzarJuego(DIFICULTAD)
}

reiniciarButton.onclick = () => {
  comenzarJuego(DIFICULTAD)
}

nuevoButton.onclick = () => {
  pedirDificultad()
}

buscarMatches.onclick = () => {
  console.log(grilla)


  let matches = [];

  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
      

      if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][ j + 2]) {
        // console.log(grilla[i][j], grilla[i][j + 1], grilla[i][j + 2])
        matches.push(grilla[i][j], grilla[i][j + 1], grilla[i][j + 2])
      }
      
    }
    
  }
  console.log(matches)
}



  alert("Bienvenidx!")
  pedirDificultad()

