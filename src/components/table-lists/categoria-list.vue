<template>
  <div class="foodtable">
    <v-card id="app">
      <h1>Categorias en general</h1>
      <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in categoriasArray" :key="item.itemid">
                <td class="text-left">{{ item.nombre_categoria }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-app>
    </v-card>
  </div>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "categoria_list",
    data() {
      return {
        categoriasArray: [],
      };
    },
    mounted() {
      axios
        .get("api/categoria")
        .then((response) => {
          let categorias = response.data;
          console.log("this pre fetch -> ", categorias);
          categorias.forEach((element) => {
            let datos = {
              nombre_categoria: element.nombre_categoria,
            };

            if (!datos) return;
            this.categoriasArray.push(datos);
          });
          console.log("this -> ", this.categoriasArray);
        })
        .catch((error) => console.log(error));
    },
  };
</script>

<style scope>
  .foodtable {
    padding-left: 17%;
    padding-top: 0%;

    padding-right: 5%;
  }
  .table-dist {
    text-align: left;
  }
</style>