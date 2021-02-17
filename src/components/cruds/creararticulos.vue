<template>
  <div class="foodtable">
    <div id="app">
      <v-app id="inspire">
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
          <!--<v-select
            v-model="selectc"
            :items="itemsc"
            label="Categoria"
            required
          ></v-select>
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
          <v-btn @click="clear" text> clear </v-btn>
        </form>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//axios.defaults.withCredentials = true;
//axios.defaults.baseURL = "http://127.0.0.1:8000/";
export default {
  name: "crearusuario",
  data: () => ({
    name: "clavo",
    cant: "2345",
    //codigo: "",
    //selectc: null,
    //selectt: null,
    //selectp: null,
    //itemsc: ["plomeria", "electricidad", "carpinteria"],
    //itemsp: ["home depot", "office depot", "general"],
    //itemstt: ["consumible", "herramienta"],
  }),

  computed: {},

  methods: {
    submit() {
      //this.$v.$touch();
      let enviar = {
        nombre_articulo: this.name,
        cantidad_articulo: this.cant,
        //codigo: this.codigo,
        //categoria: this.selectc,
        //proveedor: this.selectp,
        //tipo: this.selectt,
      };
      console.log("DATOS POR ENIAR:", enviar);
      axios
        .post("http://127.0.0.1:8000/api/articulo", enviar)
        .then((response) => {
          console.log("Response de articulo:", response);
        })
        .catch((e) => {
          alert(e.message);
        });
    },
    clear() {
      this.name = "";
      //this.codigo = "";
      this.cant = "";
      //this.selectc = null;
      //this.selectp = null;
      //this.selectt = null;
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
</style>