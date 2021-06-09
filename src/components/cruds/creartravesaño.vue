<template>
  <v-dialog
    content-class="elevation-0"
    v-model="parentdialog"
    max-width="28rem"
    persistent
  >
    <v-card v-on:keyup.enter="submit()" class="cont-card" elevation="2">
      <v-toolbar light flat>
        <v-btn icon color="dark" @click="onClose">
          <v-icon> mdi-close </v-icon>
        </v-btn>
        <v-toolbar-title>Crear travesaño</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col sm="6" md="12" lx="13">
          <v-text-field
            v-model="travesaño"
            :counter="10"
            label="Travesaño"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="green" class="mr-4" @click="submit" text> Guardar </v-btn>
      <v-btn @click="clear" text> Limpiar </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  import store from "@/store";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearmarca",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      travesaño: "",
    }),

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
        store.commit("increment", 1);
      },
      submit() {
        store.commit("setsuccess", false); //para resetear el valor de la notificion en una nueva entrada
        store.commit("setdanger", false);
        let enviar_travesaño = {
          nombre_travesano: this.travesaño,
        };
        console.log("Antes de enviar a travesaño", enviar_travesaño);
        axios
          .post("api/travesano/", enviar_travesaño)
          .then((response) => {
            if (response.statusText === "Created") {
              this.travesaño = "";
              store.commit("setsuccess", true);
            }
          })
          .catch((e) => {
            console.log(e.message);
            store.commit("setdanger", true);
          });
      },

      clear() {
        this.travesaño = "";
      },
    },
  };
</script>

<style scoped>
  .cont-card {
    padding: 1rem;
  }
</style>