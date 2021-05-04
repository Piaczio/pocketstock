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
        <v-toolbar-title>Crear artículo</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col sm="6" md="6" lx="4">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nombre articulo"
            required
          ></v-text-field>
        </v-col>
        <v-col sm="2" md="4" lx="4">
          <v-text-field
            v-model="cant"
            type="number"
            :counter="10"
            label="Cantidad articulo"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col sm="3" md="3" lx="4">
          <v-select
            v-model="selectc"
            :items="itemsc"
            item-text="nombre_categoria"
            item-value="categoria_id"
            label="Categoría"
          >
          </v-select>
        </v-col>
        <v-col sm="2" md="3" lx="4">
          <v-select
            v-model="selectt"
            :items="itemstt"
            item-text="name_tipo"
            item-value="tipo_id"
            label="Tipo"
          >
          </v-select>
        </v-col>
        <v-col sm="2" md="4" lx="5">
          <v-select
            v-model="selectp"
            :items="itemsp"
            item-text="nombre_proveedor"
            item-value="proveedor_id"
            label="Proveedor"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="2" md="4" lx="5">
          <v-select
            v-model="selectm"
            :items="itemstm"
            item-text="nombre_marca"
            item-value="marca_id"
            label="Marca"
            required
          ></v-select>
        </v-col>
        <v-col sm="2" md="4" lx="5">
          <v-select
            v-model="selectst"
            :items="itemstst"
            item-text="nombre_status"
            item-value="status_id"
            label="Status"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" md="5" lx="5">
          <v-select
            v-model="selectr"
            :items="itemsr"
            item-text="nombre_rack"
            item-value="rack_id"
            label="Ubicación rack"
            required
          ></v-select>
        </v-col>
        <v-col sm="3" md="5" lx="5">
          <v-select
            v-model="selectT"
            :items="itemsT"
            item-text="nombre_travesano"
            item-value="travesaño_id"
            label="Ubicación travesaño"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-btn color="green" class="mr-4" @click="submit()" text> Guardar </v-btn>

      <v-btn color="blue darken-1" @click="clear()" text> Limpiar </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  import store from "@/store";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";

  export default {
    name: "crearusuario",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      name: "",
      cant: "",

      selectc: "", //categoria
      selectt: "", //tipo
      selectp: "", //proveedor
      selectm: "", //marca
      selectst: "", //status
      selectr: "", //rack
      selectT: "", //travesaño

      itemsc: [], //categoria
      itemstt: [], //tipo
      itemsp: [], //proveedor
      itemstm: [], //marca
      itemstst: [], //status
      itemsr: [], //rack
      itemsT: [], //travesaño
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

            if (!datos) return;
            this.itemsc.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
      axios
        .get("api/marca")
        .then((response) => {
          let marcas = response.data;

          marcas.forEach((element) => {
            let datos = {
              marca_id: element.id,
              nombre_marca: element.nombre_marca,
            };

            if (!datos) return;
            this.itemstm.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
      axios
        .get("api/proveedor")
        .then((response) => {
          let proveedores = response.data;

          proveedores.forEach((element) => {
            let datos = {
              proveedor_id: element.id,
              nombre_proveedor: element.nombre_proveedor,
            };

            if (!datos) return;
            this.itemsp.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
      axios
        .get("api/status")
        .then((response) => {
          let status = response.data;

          status.forEach((element) => {
            let datos = {
              status_id: element.id,
              nombre_status: element.nombre_status,
            };

            if (!datos) return;
            this.itemstst.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
      axios
        .get("api/tipo")
        .then((response) => {
          let tipos = response.data;

          tipos.forEach((element) => {
            let datos = {
              tipo_id: element.id,
              name_tipo: element.name_tipo,
            };

            if (!datos) return;
            this.itemstt.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });

      axios
        .get("api/rack")
        .then((response) => {
          let racks = response.data;

          racks.forEach((element) => {
            let datos = {
              rack_id: element.id,
              nombre_rack: element.nombre_rack,
            };

            if (!datos) return;
            this.itemsr.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
      axios
        .get("api/travesano")
        .then((response) => {
          let travesaños = response.data;

          travesaños.forEach((element) => {
            let datos = {
              travesaño_id: element.id,
              nombre_travesano: element.nombre_travesano,
            };

            if (!datos) return;
            this.itemsT.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    },

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
      },
      submit() {
        this.$emit("notifysuccess", false); //para resetear el valor de la notificion en una nueva entrada
        this.$emit("notifyproblem", false); //para resetear el valor de la notificion en una nueva entrada
        let enviar = {
          nombre_articulo: this.name,
          cantidad_articulo: this.cant,
          categoria_id: this.selectc,
          proveedor_id: this.selectp,
          tipo_id: this.selectt,
          status_id: this.selectst,
          marca_id: this.selectm,
          rack_id: this.selectr,
          travesaño_id: this.selectT,
        };
        axios
          .post("api/articulo", enviar)
          .then((response) => {
            if (response.statusText === "Created") {
              this.$emit("notifysuccess", true);
              store.commit("increment", 1);
              (this.name = ""),
                (this.cant = ""),
                (this.selectc = ""),
                (this.selectp = ""),
                (this.selectt = ""),
                (this.selectst = ""),
                (this.selectr = ""),
                (this.selectT = ""),
                (this.selectm = "");
            }
          })
          .catch((e) => {
            console.log(e.message);
            this.$emit("notifyproblem", true);
          });
      },
      clear() {
        this.name = "";
        this.cant = "";
        this.selectc = "";
        this.selectp = "";
        this.selectt = "";
        this.selectst = "";
        this.selectr = "";
        this.selectT = "";
        this.selectm = "";
      },
    },
  };
</script>
<style scoped>
  .cont-card {
    padding: 2%;
  }
</style>