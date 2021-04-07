<template>
  <div id="app">
    <v-snackbar
      dense
      color="success"
      outlined
      :value="alertsuccess"
      :timeout="timeout"
      rounded="pill"
      top
    >
      ¡Ubicación guardada exitosamente!
    </v-snackbar>
    <v-snackbar
      dense
      color="red"
      outlined
      :value="alertproblem"
      :timeout="timeout"
      rounded="pill"
      top
    >
      ¡Ups hubo un problema!
    </v-snackbar>
    <v-app id="inspire">
      <div class="text-center">
        <v-dialog
          content-class="elevation-0"
          v-model="parentdialog"
          max-width="800px"
          persistent
        >
          <v-card elevation="2">
            <v-toolbar light flat>
              <v-btn icon color="dark" @click="onClose">
                <v-icon> mdi-close </v-icon>
              </v-btn>
              <v-toolbar-title>Crear ubicación</v-toolbar-title>
            </v-toolbar>

            <v-text-field
              v-model="rack"
              :counter="10"
              label="Rack"
              required
            ></v-text-field>
            <v-text-field
              v-model="travesaño"
              :counter="10"
              label="Travesaño"
              required
            ></v-text-field>
            <v-btn class="mr-4" v-on:click="submit" text> Guardar </v-btn>
            <v-btn @click="clear" text> Limpiar </v-btn>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearmarca",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      rack: "",
      travesaño: "",
      alertsuccess: false,
      alertproblem: false,
      timeout: 2000,
    }),

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
      },
      submit() {
        this.$emit("dialogFromChild", false);
        let enviar_rack = {
          nombre_rack: this.rack,
        };
        let enviar_travesaño = {
          nombre_travesaño: this.travesaño,
        };

        axios
          .post("api/rack", enviar_rack)
          .then((response) => {
            if (response.statusText === "Created") {
              this.alertsuccess = true;
            }
            this.alertproblem = false;
          })
          .catch((e) => {
            console.log(e.message);
            this.alertproblem = true;
          });
        axios
          .post("api/travesaño", enviar_travesaño)
          .then((response) => {
            if (response.statusText === "Created") {
              this.alertsuccess = true;
            }
            this.alertproblem = false;
          })
          .catch((e) => {
            console.log(e.message);
            this.alertproblem = true;
          });
        this.alertsuccess = false;
      },

      clear() {
        (this.rack = ""), (this.travesaño = "");
      },
    },
  };
</script>

<style>
</style>