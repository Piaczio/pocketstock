<template>
  <div class="foodtable">
    <v-card id="app">
      <h1>Marcas en general</h1>
      <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in marcasArray" :key="item.itemid">
                <td class="text-left">{{ item.nombre_marca }}</td>
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
    name: "tabla-marcas",
    data() {
      return {
        marcasArray: [],
      };
    },
    mounted() {
      axios
        .get("api/marca")
        .then((response) => {
          let marcas = response.data;
          console.log("this pre fetch -> ", marcas);
          marcas.forEach((element) => {
            let datos = {
              nombre_marca: element.nombre_marca,
            };

            if (!datos) return;
            this.marcasArray.push(datos);
          });
          console.log("this -> ", this.marcasArray);
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