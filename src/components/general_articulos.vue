<template>
  <div class="foodtable">
    <v-card id="app">
      <h1>Equipo de plomeria</h1>
      <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Articulo</th>
                <th class="text-left">Descripción</th>
                <th class="text-left">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in articulosArray" :key="item.itemid">
                <td class="table-dist">{{ item.nombre_articulo }}</td>
                <td class="table-dist">{{ item.descripcion_articulo }}</td>
                <td class="table-dist">{{ item.cantidad_articulo }}</td>
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
        let articulos = response.data;
        articulos.forEach((element) => {
          let datos = {
            nombre_articulo: element.nombre_articulo,
            descripcion_articulo: element.descripcion_articulo,
            cantidad_articulo: element.cantidad_articulo,
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
  padding-left: 20%;
  padding-top: 0%;

  padding-right: 20%;
}
.table-dist {
  text-align: left;
}
</style>
