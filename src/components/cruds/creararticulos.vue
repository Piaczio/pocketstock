<template>
  <div class="foodtable">
    <div id="app">
      <v-app id="inspire">
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
        <v-card class="v-card" elevation="2">
          <form>
            <v-row>
              <v-col sm="6" md="6" lx="4">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  label="Nombre articulo"
                  required
                ></v-text-field>
              </v-col>
              <v-col sm="2" md="3" lx="4">
                <v-text-field
                  v-model="cant"
                  type="number"
                  :counter="10"
                  label="Cantidad articulo"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="3" md="3" lx="4">
                <v-select
                  v-model="selectc"
                  :items="itemsc"
                  item-text="nombre_categoria"
                  item-value="categoria_id"
                  label="Categoria"
                >
                </v-select>
              </v-col>
              <v-col sm="2" md="2" lx="4">
                <v-select
                  v-model="selectt"
                  :items="itemstt"
                  item-text="name_tipo"
                  item-value="tipo_id"
                  label="Tipo"
                >
                </v-select>
              </v-col>
              <v-col sm="2" md="4" lx="4">
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
              <v-col sm="2" md="3" lx="4">
                <v-select
                  v-model="selectm"
                  :items="itemstm"
                  item-text="nombre_marca"
                  item-value="marca_id"
                  label="Marca"
                  required
                ></v-select>
              </v-col>
              <v-col sm="2" md="3" lx="4">
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
              <v-col sm="3" md="5" lx="3">
                <v-select
                  v-model="selectu"
                  :items="itemsu"
                  item-text="rack"
                  item-value="ubicacion_id"
                  label="Ubicación rack"
                  required
                ></v-select>
              </v-col>
              <v-col sm="3" md="5" lx="3">
                <v-select
                  v-model="selectu"
                  :items="itemsu"
                  item-text="travesaño"
                  item-value="ubicacion_id"
                  label="Ubicación travesaño"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <v-btn class="mr-4" v-on:click="submit" text> Guardar </v-btn>
            <v-btn @click="clear" text> Limpiar </v-btn>
          </form>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script scope>
  import axios from "axios";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "crearusuario",
    data: () => ({
      name: "clavo",
      cant: "2345",
      //codigo: "",
      selectc: null, //categoria
      selectt: null, //tipo
      selectp: null, //proveedor
      selectm: null, //marca
      selectst: null, //status
      selectu: null, //ubicacion

      itemsc: [], //categoria
      itemstt: [], //tipo
      itemsp: [], //proveedor
      itemstm: [], //marca
      itemstst: [], //status
      itemsu: [], //ubucacion
      alertsuccess: false,
      alertproblem: false,
      timeout: 2000,
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
        .get("api/ubicacion")
        .then((response) => {
          let ubicaciones = response.data;

          ubicaciones.forEach((element) => {
            let datos = {
              ubicacion_id: element.id,
              travesaño: element.travesaño,
              rack: element.rack,
            };

            if (!datos) return;
            this.itemsu.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
    computed: {},

    methods: {
      submit() {
        //this.$v.$touch();
        let enviar = {
          nombre_articulo: this.name,
          cantidad_articulo: this.cant,

          categoria_id: this.selectc,
          proveedor_id: this.selectp,
          tipo_id: this.selectt,
          status_id: this.selectst,
          marca_id: this.selectm,
          ubicacion_id: this.selectu,
        };

        axios
          .post("api/articulo", enviar)
          .then((response) => {
            if (response.statusText === "Created") {
              this.alertsuccess = true;
            }
          })
          .catch((e) => {
            console.log(e.message);
            this.alertproblem = true;
          });
        this.alertsuccess = false;
        this.alertproblem = false;
      },

      clear() {
        this.name = "";
        //this.codigo = "";
        this.cant = "";
        this.selectc = null;
        this.selectp = null;
        this.selectt = null;
        this.selectst = null;
        this.selectu = null;
        this.selectm = null;
      },
    },
  };
</script>

<style >
  .foodtable {
    padding-left: 30%;
    padding-top: 0%;
    padding-right: 0%;
  }

  .v-card {
    padding-left: 2%;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    width: 100%;
  }
</style>