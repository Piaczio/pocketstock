<template>
  <div class="foodtable">
    <v-card id="app">
      <h1>Artículos en general</h1>
      <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Artículo</th>
                <th class="text-left">Cantidad</th>
                <th class="text-left">Descripción</th>
                <th class="text-left">Tipo</th>
                <th class="text-left">Marca</th>
                <th class="text-left">Proveedor</th>
                <th class="text-left">Status</th>
                <th class="text-left">Ubicación</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in articulosArray" :key="item.itemid">
                <td class="table-dist">{{ item.nombre_articulo }}</td>
                <td class="table-dist">{{ item.cantidad_articulo }}</td>
                <td class="table-dist">{{ item.descripcion_articulo }}</td>
                <td class="table-dist">{{ item.tipo_articulo }}</td>
                <td>{{ item.marca_articulo }}</td>
                <td class="table-dist">{{ item.proveedor_articulo }}</td>
                <td class="table-dist">{{ item.status_articulo }}</td>
                <td class="table-dist">
                  {{ item.ubicacion_rack_articulo }},
                  {{ item.ubicacion_travesaño_articulo }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-app>
    </v-card>
  </div>
</template>
<script >
import axios from "axios";
//axios.defaults.withCredentials = true;
//axios.defaults.baseURL = "";
export default {
  name: "GeneralArticulo Lista",
  data() {
    return {
      articulosArray: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/articulo")
      .then((response) => {
        console.log("this -> ", response);
        let articulos = response.data;

        articulos.forEach((element) => {
          let datos = {
            nombre_articulo: element.nombre_articulo,
            cantidad_articulo: element.cantidad_articulo,
            descripcion_articulo: element.descripcion_articulo,
            marca_articulo: element.nombre_marca,
            tipo_articulo: element.name_tipo,
            proveedor_articulo: element.nombre_proveedor,
            status_articulo: element.nombre_status,
            ubicacion_rack_articulo: element.rack,
            ubicacion_travesaño_articulo: element.travesaño,
          };

          if (!datos) return;
          this.articulosArray.push(datos);
        });
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>
.foodtable {
  padding-left: 17%;
  padding-top: 0%;

  padding-right: 5%;
}
.table-dist {
  text-align: left;
}
</style>

