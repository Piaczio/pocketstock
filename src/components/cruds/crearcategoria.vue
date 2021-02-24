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
        <v-card class="cont-card" elevation="2">
          <form>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nombre categoria"
              required
            ></v-text-field>
            <v-textarea v-model="descripcion" :counter="120" color="teal">
              <template v-slot:label>
                <div>Descripción categoria <small>(opcional)</small></div>
              </template>
            </v-textarea>
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
      name: "",
      descripcion: "",
      alert1: false,
      alert2: false,
      timeout: 2000,
    }),

    methods: {
      submit() {
        let enviar = {
          nombre_categoria: this.name,
          descripcion_categoria: this.descripcion,
        };
        console.log("DATOS POR ENIAR en categoria:", enviar);
        axios
          .post("api/categoria", enviar)
          .then((response) => {
            console.log("Response de categoria:", response);
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
        (this.name = ""), (this.descripcion = "");
      },
    },
  };
</script>

<style>
  .foodtable {
    padding-left: 30%;
    padding-top: 0%;
    padding-right: 30%;
  }
  .cont-card {
    padding-left: 2%;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
  }
</style>