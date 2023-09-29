//Fetch API
const url = "";

const listaClientes = () =>{
    return fetch("https://65170c27582f58d62d34be2a.mockapi.io/users").then(respuesta =>{
        return respuesta.json();
    });
};
const listaProductos = () => fetch("https://65170c27582f58d62d34be2a.mockapi.io/products").then((respuesta) => respuesta.json()).catch((error) => error);

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
    return fetch(`https://65170c27582f58d62d34be2a.mockapi.io/products${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`https://65170c27582f58d62d34be2a.mockapi.io/products${id}`)
    .then( (respuesta) => respuesta.json())
}

const actualizarProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod,id) =>{
    return fetch(`https://65170c27582f58d62d34be2a.mockapi.io/products${id}`,{
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
