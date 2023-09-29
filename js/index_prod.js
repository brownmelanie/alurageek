import { listaServices } from "../service/client-service.js";

const crearNuevaLinea = (imagen, categoria, nombre_prod, precio_prod, id) => {
  const linea = document.createElement("div");

  const contenido = `
  <div class="contenedor block_principal">
    <a class="link_producto" href="./descripcion_productos.html?id=${id}&categoria=${categoria}">
    <img src="${imagen}" alt="${nombre_prod}">
    <div>
      <ul>
        <li class="nombre_producto">${nombre_prod}</li>
        <li class="precio_producto">${precio_prod}</li>
        <li>Ver producto</li>
      </ul>   
    </div>
    </a>
 </div>
  `;
  linea.innerHTML = contenido;
  return linea;
};

const starwars = "Star Wars";
const consolas = "Consolas";
const diversos = "Diversos";

const div_sw = document.querySelector("[data-producto-sw]");
const div_cl = document.querySelector("[data-producto-cl]");
const div_dv = document.querySelector("[data-producto-dv]");

let cont_sw = 0;
let cont_cl = 0;
let cont_dv = 0;

listaServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imagen, categoria, nombre_prod, precio_prod, id }) => {
      if (screen.width > 768) {
        if (categoria === starwars && cont_sw < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_sw.appendChild(nuevaLinea);
          cont_sw++;
        }
        if (categoria === consolas && cont_cl < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_cl.appendChild(nuevaLinea);
          cont_cl++;
        }
        if (categoria === diversos && cont_dv < 6) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_dv.appendChild(nuevaLinea);
          cont_dv++;
        }
      }
      else if (screen.width <= 768) {
        if (categoria === starwars && cont_sw < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_sw.appendChild(nuevaLinea);
          cont_sw++;
        }
        if (categoria === consolas && cont_cl < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_cl.appendChild(nuevaLinea);
          cont_cl++;
        }
        if (categoria === diversos && cont_dv < 4) {
          const nuevaLinea = crearNuevaLinea(imagen, categoria, nombre_prod, precio_prod, id);
          div_dv.appendChild(nuevaLinea);
          cont_dv++;
        }
      }

      });
  })
  .catch((error) => alert("Ocurrió un error, intente nuevamente"));
