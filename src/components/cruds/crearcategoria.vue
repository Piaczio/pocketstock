<template>
  <v-dialog
    content-class="elevation-0"
    v-model="parentdialog"
    max-width="40rem"
    persistent
  >
    <v-card v-on:keyup.enter="submit()" class="cont-card">
      <v-toolbar light flat>
        <v-btn icon color="dark" @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Crear categorías</v-toolbar-title>
      </v-toolbar>
      <v-row
        ><v-col md="8">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nombre categoría"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="10">
          <v-textarea v-model="descripcion" :counter="120" color="teal">
            <template v-slot:label>
              <div>Descripción categoría <small>(opcional)</small></div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn color="green" class="mr-4" @click="submit" text> Guardar </v-btn>
        <v-btn @click="clear" text> Limpiar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  import store from "@/store";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearcategoria",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      name: "",
      descripcion: "",
    }),

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
      },
      submit() {
        store.commit("setsuccess", false);
        store.commit("setdanger", false);
        let enviar = {
          nombre_categoria: this.name,
          descripcion_categoria: this.descripcion,
        };

        axios
          .post("api/categoria", enviar)
          .then((response) => {
            if (response.statusText === "Created") {
              store.commit("setsuccess", true);
              (this.name = ""), (this.descripcion = "");
            }
          })
          .catch((e) => {
            console.log(e.message);
            if (e) {
              store.commit("setdanger", true);
            }
          });
      },
      clear() {
        (this.name = ""), (this.descripcion = "");
      },
    },
  };
</script>

<style scoped>
  .cont-card {
    padding: 1rem;
  }
</style>