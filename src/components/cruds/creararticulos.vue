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
        <v-col sm="6" md="12" lx="13">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nombre artículo"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" md="12" lx="13">
          <v-text-field
            v-model="cant"
            type="number"
            :counter="10"
            label="Cantidad artículo"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col sm="6" md="12" lx="13">
          <v-select
            v-model="selectc"
            :items="itemsc"
            item-text="nombre_categoria"
            item-value="categoria_id"
            label="Categoría"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" md="6" lx="8">
          <v-select
            v-model="selectt"
            :items="itemstt"
            item-text="name_tipo"
            item-value="tipo_id"
            label="Tipo"
          >
          </v-select>
        </v-col>

        <v-col sm="6" md="6" lx="8">
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
        <v-col sm="6" md="6" lx="8">
          <v-select
            v-model="selectm"
            :items="itemstm"
            item-text="nombre_marca"
            item-value="marca_id"
            label="Marca"
            required
          ></v-select>
        </v-col>

        <v-col sm="6" md="6" lx="8">
          <v-select
            v-model="selectst"
            :items="itemstst"
            item-text="nombre_status"
            item-value="status_id"
            label="Estatus"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" md="6" lx="8">
          <v-select
            v-model="selectr"
            :items="itemsr"
            item-text="nombre_rack"
            item-value="rack_id"
            label="Ubicación rack"
            required
          ></v-select>
        </v-col>
        <v-col sm="3" md="6" lx="8">
          <v-select
            v-model="selectT"
            :items="itemsT"
            item-text="nombre_travesano"
            item-value="travesano_id"
            label="Ubicación travesaño"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn color="green" class="mr-4" @click="submit" text> Guardar </v-btn>
        <v-btn color="blue darken-1" @click="clear" text> Limpiar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";
  import store from "@/store";
  import { postArticulos } from "@/api/articulos.js";
  import { getCategorias } from "@/api/categorias.js";
  import { getMarcas } from "@/api/marcas.js";
  import { getProveedores } from "@/api/proveedores.js";
  import { getRack } from "@/api/racks.js";
  import { getTravesano } from "@/api/travesanos.js";
  import { getTipos } from "@/api/tipos.js";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";

  export default {
    name: "creararticulos",
    props: {
      parentdialog: { type: Boolean },
    } /*data de llegado de componente padre creacion*/,
    data: () => ({
      name: "",
      cant: "",
      cargando: false,
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
      getCategorias(this.itemsc)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
      getMarcas(this.itemstm)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
      getProveedores(this.itemsp)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
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

      getTipos(this.itemstt)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
      getRack(this.itemsr)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
      getTravesano(this.itemsT)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
    },

    methods: {
      onClose() {
        /*Envia parametro de cierre a componente creación*/
        this.$emit("dialogFromChild", false);
        store.commit("increment", 1);
      },
      submit() {
        store.commit("setsuccess", false); //para resetear el valor de la notificion en una nueva entrada
        store.commit("setdanger", false); //para resetear el valor de la notificion en una nueva entrada
        let enviar = {
          nombre_articulo: this.name,
          cantidad_articulo: this.cant,
          categoria_id: this.selectc,
          proveedor_id: this.selectp,
          tipo_id: this.selectt,
          status_id: this.selectst,
          marca_id: this.selectm,
          rack_id: this.selectr,
          travesano_id: this.selectT,
        };
        postArticulos(enviar);
        this.clear();
      },
      clear() {
        (this.name = ""),
          (this.cant = ""),
          (this.selectc = ""),
          (this.selectp = ""),
          (this.selectt = ""),
          (this.selectst = ""),
          (this.selectr = ""),
          (this.selectT = ""),
          (this.selectm = "");
      },
    },
  };
</script>
<style scoped>
  .cont-card {
    padding: 1rem;
  }
</style>