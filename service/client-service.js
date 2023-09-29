//Fetch API
const url = "";

const listaClientes = () =>{
    return fetch("https://.mockapi.io/user").then(respuesta =>{
        return respuesta.json();
    });
};
const listaProductos = () => fetch("https://.mockapi.io/prod").then((respuesta) => respuesta.json()).catch((error) => error);

const crearCliente = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    console.log(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            imagen,
            categoria,
            nombre_prod,
            precio_prod,
            descripcion_prod
      
        })
    })
}

const eliminarCliente = (id) =>{
    console.log("eliminar a", id)
    return fetch(`https://.mockapi.io/prod/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`https://.mockapi.io/prod/${id}`)
    .then( (respuesta) => respuesta.json())
}

const actualizarProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod,id) =>{
    return fetch(`https://.mockapi.io/prod/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imagen, categoria, nombre_prod, precio_prod, descripcion_prod})
    })
    .then( (respuesta) => respuesta)
    .catch( (err) => console.log(err));
}

export const clientServices = {
    listaClientes,
    eliminarCliente,
}
export const listaServices = {
    eliminarCliente,
    listaProductos,
    crearCliente,
    actualizarProducto,
    detalleProducto
}
