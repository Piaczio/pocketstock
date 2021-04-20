<template>
  <v-dialog
    content-class="elevation-0"
    v-model="parentdialog"
    max-width="20rem"
    persistent
  >
    <v-card elevation="2">
      <div class="cont-card">
        <v-toolbar light flat>
          <v-btn icon color="dark" @click="onClose">
            <v-icon> mdi-close </v-icon>
          </v-btn>
          <v-toolbar-title>Crear tipo</v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col md="10">
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nombre tipo"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn class="mr-4" v-on:click="submit" text> Guardar </v-btn>
          <v-btn @click="clear" text> Limpiar </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "creartipo",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      name: "",
    }),

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
      },
      submit() {
        this.$emit("dialogFromChild", false);
        this.$emit("locationCreated", false); //para resetear el valor de la notificion en una nueva entrada
        this.$emit("locationNotCreated", false);
        let enviar = {
          name_tipo: this.name,
        };

        axios
          .post("api/tipo", enviar)
          .then((response) => {
            if (response.statusText === "Created") {
              this.$emit("locationCreated", true);
            }
          })
          .catch((e) => {
            console.log(e.message);
            this.$emit("locationNotCreated", true);
          });
      },
      clear() {
        this.name = "";
      },
    },
  };
</script>

<style scoped>
  .cont-card {
    padding: 1rem;
  }
</style>