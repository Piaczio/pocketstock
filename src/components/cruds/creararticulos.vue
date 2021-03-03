<template>
  <div class="foodtable">
    <div id="app">
      <v-app id="inspire">
        <v-snackbar
          dense
          color="success"
          outlined
          :value="alert1"
          :timeout="timeout"
          rounded="pill"
          top
        >
          ¡Categoria guardada exitosamente!
        </v-snackbar>
        <v-snackbar
          dense
          color="red"
          outlined
          :value="alert2"
          :timeout="timeout"
          rounded="pill"
          top
        >
          ¡Ups hubo un problema!
        </v-snackbar>
        <v-card class="v-card" elevation="2">
          <form>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nombre articulo"
              required
            ></v-text-field>
            <v-text-field
              v-model="cant"
              type="number"
              :counter="10"
              label="Cantidad articulo"
              required
            ></v-text-field>
            <v-select
              v-model="selectc"
              :items="itemsc"
              item-text="nombre_categoria"
              item-value="categoria_id"
              label="Categoria"
            >
              <!--<td>{{ itemsc. }}</td>-->
            </v-select>
            <!--
          <v-select
            v-model="selectp"
            :items="itemsp"
            label="Proveedor"
            required
          ></v-select>
          <v-select
            v-model="selectt"
            :items="itemstt"
            :error-messages="selectErrors"
            label="Tipo de articulo"
            required
          ></v-select>-->
            <v-btn class="mr-4" v-on:click="submit" text> Guardar </v-btn>
            <v-btn @click="clear" text> Limpiar </v-btn>
          </form>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearusuario",
    data: () => ({
      name: "clavo",
      cant: "2345",
      //codigo: "",
      selectc: null,
      //selectt: null,
      //selectp: null,
      itemsc: [],
      //itemsp: ["home depot", "office depot", "general"],
      //itemstt: ["consumible", "herramienta"],
      alert1: false,
      alert2: false,
      timeout: 2000,
    }),
    mounted() {
      axios
        .get("api/categoria")
        .then((response) => {
          let categorias = response.data;

          categorias.forEach((element) => {
            let datos = {
              categoria_id: element.id,
              nombre_categoria: element.nombre_categoria,
            };
            console.log("recibidos ", datos);
            if (!datos) return;
            this.itemsc.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
    computed: {},

    methods: {
      submit() {
        //this.$v.$touch();
        let enviar = {
          nombre_articulo: this.name,
          cantidad_articulo: this.cant,
          //codigo: this.codigo,
          categoria_id: this.selectc,
          //proveedor: this.selectp,
          //tipo: this.selectt,
        };
        console.log("Por enviar ", enviar);
        axios
          .post("api/articulo", enviar)
          .then((response) => {
            if (response.statusText === "Created") {
              this.alert1 = true;
            }
          })
          .catch((e) => {
            console.log(e.message);
            this.alert2 = true;
          });
      },

      clear() {
        this.name = "";
        //this.codigo = "";
        this.cant = "";
        this.selectc = null;
        //this.selectp = null;
        //this.selectt = null;
      },
    },
  };
</script>

<style scope>
  .foodtable {
    padding-left: 30%;
    padding-top: 0%;
    padding-right: 30%;
  }
  .v-card {
    padding-left: 2%;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
  }
</style>