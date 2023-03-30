// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const lista = document.getElementById("lista-de-productos") //Traemos la lista
const input = document.querySelector('input'); //Traemos el input
const botonDeFiltro = document.querySelector("button"); //traemos el boton

//Funcion que busca coincidencias de una cadena en las claves tipo y color
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
} 

//Cuando se presiona el boton se ejecuta la siguiente funcion
botonDeFiltro.onclick = function() { 
  while (lista.firstChild) { //Si la lista tiene elementos los borra
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value; //Traemos el valor del input
  console.log(texto); //Lo imprimimos en consola
  const productosFiltrados = filtrado(productos, texto ); //Con la funcion filtro filtramos productos y guardamos esta sublista

  for (let i = 0; i < productosFiltrados.length; i++) { //iniciamos un for donde por cada elemento imprimira el nombre y la imagen con ayuda del dom
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    lista.appendChild(d)
  }
}

 