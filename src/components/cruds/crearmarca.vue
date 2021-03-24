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
          ¡Marca guardada exitosamente!
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
              label="Nombre marca"
              required
            ></v-text-field>
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
    name: "crearmarca",
    data: () => ({
      name: "",
      alert1: false,
      alert2: false,
      timeout: 2000,
    }),

    methods: {
      submit() {
        let enviar = {
          nombre_marca: this.name,
        };
        console.log("DATOS POR ENIAR en marca:", enviar);
        axios
          .post("api/marca", enviar)
          .then((response) => {
            console.log("Response de marca:", response);
            if (response.statusText === "Created") {
              this.alert1 = true;
            }
          })
          .catch((e) => {
            console.log(e.message);
            this.alert2 = true;
          });
        this.alert1 = false;
        this.alert2 = false;
      },
      clear() {
        this.name = "";
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