<template>
  <v-dialog
    content-class="elevation-0"
    v-model="parentdialog"
    max-width="40rem"
    persistent
  >
    <v-snackbar
      dense
      color="success"
      outlined
      :value="alertsuccess"
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
      :value="alertproblem"
      :timeout="timeout"
      rounded="pill"
      top
    >
      ¡Ups hubo un problema!
    </v-snackbar>

    <v-card class="cont-card">
      <v-toolbar light flat>
        <v-btn icon color="dark" @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Crear categoria</v-toolbar-title>
      </v-toolbar>
      <v-row
        ><v-col md="6">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nombre categoria"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8">
          <v-textarea v-model="descripcion" :counter="120" color="teal">
            <template v-slot:label>
              <div>Descripción categoria <small>(opcional)</small></div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn class="mr-4" @click="submit" text> Guardar </v-btn>
        <v-btn @click="clear" text> Limpiar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
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
          nombre_categoria: this.name,
          descripcion_categoria: this.descripcion,
        };

        axios
          .post("api/categoria", enviar)
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
        (this.name = ""), (this.descripcion = "");
      },
    },
  };
</script>

<style scoped>
  .cont-card {
    padding: 2%;
  }
</style>