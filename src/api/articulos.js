import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/";
export function getArticulos() {
 axios
  .get("api/articulo")
  .then((response) => {
   console.log("En agrupado:", response);
   let articulos = response.data;
   articulos.forEach((element) => {
    let datos = {
     id: element.id,
     nombre_articulo: element.nombre_articulo,
     cantidad_articulo: element.cantidad_articulo,
     descripcion_articulo: element.descripcion_articulo,
     nombre_categoria: element.nombre_categoria,
     name_tipo: element.name_tipo,
     nombre_marca: element.nombre_marca,
     nombre_proveedor: element.nombre_proveedor,
     nombre_status: element.nombre_status,
     //campos de ubicación
     nombre_rack: element.nombre_rack,
     nombre_travesano: element.nombre_travesano,
    };
    if (!datos)
     return;
    this.articulosArray.push(datos);
   });
   this.cargando = false;
  })
  .catch(error => {
   console.error(error);
  });
}
