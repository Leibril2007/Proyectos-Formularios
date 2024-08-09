/* Llamando a un node del DOM */
let root = document.querySelector("#root");

// Elemento de tipo div con un atributo class
let div_formularios = document.createElement("div");

// Agregar una clase al div 
div_formularios.className = "div_formularios";

// lista de textos
let formularios = [
    {nombre:"login",link:"componentes/login/login.html"},
    {nombre:"formulario De Contacto",link:"componentes/formularioDeContacto/formularioDeContacto.html"},
    {nombre:"formulario De Registro",link:"componentes/formularioDeRegistro/formularioDeRegistro.html"},
    {nombre:"formulario De Búsqueda",link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre:"formulario De Pedido Compras",link:"componentes/formularioDePedidoCompras/formularioDePedidoCompras.html"},
    {nombre:"formulario De Comentarios",link:"componentes/formularioDeComentarios/formularioDeComentarios.html"},
];

//forEach (for), 
formularios.forEach(itemLista => {

    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link; // se inserta el link del objeto
    div_item.innerText = itemLista.nombre; // se inserta solo el nombre de la lista de objetos
    
    //main inserta al item en formularios
    div_formularios.appendChild(div_item);
});

// Agrega al node root, el elemento div_formulario
// Con este se agrega los div, sino no aparecerá
root.appendChild(div_formularios);