<template>
  <v-dialog
    content-class="elevation-0"
    v-model="parentdialog"
    max-width="20rem"
    persistent
  >
    <v-card elevation="2">
      <div class="cont-card">
        <v-snackbar
          dense
          color="success"
          outlined
          :value="alertsuccess"
          :timeout="timeout"
          rounded="pill"
          top
        >
          ¡Status guardada exitosamente!
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
        <v-toolbar light flat>
          <v-btn icon color="dark" @click="onClose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Crear status</v-toolbar-title>
        </v-toolbar>
        <v-row justify-sm="center">
          <v-col md="10rem">
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nombre status"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="mr-4" v-on:click="submit" text> Guardar </v-btn>
        <v-btn @click="clear" text> Limpiar </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearstatus",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      name: "",
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
        let enviar = {
          nombre_status: this.name,
        };

        axios
          .post("api/status", enviar)
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
        this.name = "";
      },
    },
  };
</script>

<style scoped>
  .cont-card {
    padding: 2%;
  }
</style>