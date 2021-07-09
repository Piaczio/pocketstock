<template>
  <div class="tabla" id="app">
    <v-row>
      <v-col cols="12" sm="4" md="5">
        <v-text-field
          label="Buscar artículo"
          placeholder="Nombre, cantidad, categoria, tipo ...."
          class="mx-4"
          v-model="search"
          id="onsearch"
        />
      </v-col>
    </v-row>

    <v-app id="inspire">
      <v-progress-linear
        height="6"
        indeterminate
        color="cyan"
        :active="cargando"
      ></v-progress-linear>
      <v-data-table
        id="tabla"
        :headers="headers"
        :items="articulosArray"
        sort-by="cantidad_articulo"
        class="elevation-2"
        :search="search"
        :custom-filter="filterOnlyCapsText.toUpperCase"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tabla artículos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <h1 class="headline">{{ formTitle }}</h1>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row cols="12">
                      <v-col sm="4" md="5">
                        <v-text-field
                          v-model="editedItem.nombre_articulo"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="1" md="2">
                        <v-text-field
                          v-model="editedItem.cantidad_articulo"
                          type="number"
                          label="Cantidad"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="3" md="4">
                        <v-select
                          v-model="selectc"
                          :items="itemsc"
                          item-text="nombre_categoria"
                          item-value="categoria_id"
                          label="Categoría"
                        ></v-select>
                      </v-col>
                      <v-col sm="3" md="4">
                        <v-select
                          v-model="selectt"
                          :items="itemstt"
                          item-text="name_tipo"
                          item-value="tipo_id"
                          label="Tipo"
                        >
                        </v-select>
                      </v-col>
                      <v-col sm="3" md="4">
                        <v-select
                          v-model="selectm"
                          :items="itemstm"
                          item-text="nombre_marca"
                          item-value="marca_id"
                          label="Marca"
                          required
                        ></v-select>
                      </v-col>
                      <v-col sm="3" md="5">
                        <v-select
                          v-model="selectp"
                          :items="itemsp"
                          item-text="nombre_proveedor"
                          item-value="proveedor_id"
                          label="Proveedor"
                          required
                        ></v-select>
                      </v-col>
                      <v-col sm="3" md="3">
                        <v-select
                          v-model="selectst"
                          :items="itemstst"
                          item-text="nombre_status"
                          item-value="status_id"
                          label="Estatus"
                          required
                        ></v-select>
                      </v-col>
                      <v-col sm="4" md="5">
                        <v-select
                          v-model="selectr"
                          :items="itemsr"
                          item-text="nombre_rack"
                          item-value="rack_id"
                          label="Ubicación rack"
                          required
                        ></v-select>
                      </v-col>
                      <v-col sm="4" md="5">
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
                  </v-container>
                </v-card-text>

                <v-card-actions v-on:keyup.enter="save">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions v-on:keyup.enter="deleteItemConfirm">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.nombre_status`]="{ item }">
          <v-chip :color="getColor(item.nombre_status)" dark>
            {{ item.nombre_status }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <span>Datos no disponibles.</span>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
  import axios from "axios";
  import store from "@/store";
  import {
    getArticulos,
    deleteArticulos,
    editArticulos,
  } from "@/api/articulos.js";
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    name: "tabla-articulos",
    data: () => ({
      search: "",
      dialog: false,
      dialogDelete: false,
      cargando: true,

      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre_articulo",
        },
        { text: "Cantidad", value: "cantidad_articulo" },
        { text: "Categoría", value: "nombre_categoria" },
        { text: "Tipo", value: "name_tipo" },
        { text: "Marca", value: "nombre_marca" },
        { text: "Proveedor", value: "nombre_proveedor" },
        { text: "estatus", value: "nombre_status" },
        { text: "Rack", value: "nombre_rack" },
        { text: "Travesaño", value: "nombre_travesano" },
        { text: "Acciones", value: "actions", sortable: false },
      ],

      articulosArray: [],
      //variable en la que se deposita la posicion en el selector
      selectc: "", //categoria
      selectt: "", //tipo
      selectp: "", //proveedor
      selectm: "", //marca
      selectst: "", //status
      selectr: "", //rack
      selectT: "", //travesaño
      //Array en el que se deposita de los selectores.
      itemsc: [], //categoria
      itemstt: [], //tipo
      itemsp: [], //proveedor
      itemstm: [], //marca
      itemstst: [], //status
      itemsr: [], //rack
      itemsT: [], //travesaño

      editedIndex: -1,
      editedItem: {
        id: "",
        nombre_articulo: "",
        cantidad_articulo: 0,
        nombre_categoria: "",
        name_tipo: "",
        nombre_marca: "",
        nombre_proveedor: "",
        nombre_status: "",
        nombre_rack: "",
        nombre_travesano: "",
      },
      defaultItem: {
        id: "",
        nombre_articulo: "",
        cantidad_articulo: 0,
        nombre_categoria: "",
        name_tipo: "",
        nombre_marca: "",
        nombre_proveedor: "",
        nombre_status: "",
        nombre_rack: "",
        nombre_travesano: "",
      },
    }),
    created() {
      this.onFocus();
    },
    mounted() {
      window.Echo.channel("articulos").listen("articuloCreated", (e) => {
        this.articulosArray = e.articulos;
      });

      window.Echo.channel("categorias").listen("categoriaCreated", (e) => {
        this.itemsc = e.categorias;
      });
      window.Echo.channel("marcas").listen("marcaCreated", (e) => {
        this.itemstm = e.marcas;
      });
      window.Echo.channel("proveedores").listen("proveedorCreated", (e) => {
        this.itemsp = e.proveedores;
      });
      window.Echo.channel("status").listen("statusCreated", (e) => {
        this.itemstst = e.status;
      });
      window.Echo.channel("tipos").listen("tipoCreated", (e) => {
        this.itemstt = e.tipos;
      });
      window.Echo.channel("racks").listen("rackCreated", (e) => {
        this.itemsr = e.racks;
      });
      window.Echo.channel("travesanos").listen("travesañoCreated", (e) => {
        this.itemsT = e.travesanos;
      });
      getArticulos(this.articulosArray)
        .then((response) => {
          if (response.stats === 200) {
            this.cargando = false;
            store.commit("setsuccess", false); //para resetear el valor de la notificion en una nueva entrada
            store.commit("setdanger", false);
          }
        })
        .catch((e) => {
          console.log(e);
          this.cargando = true;
        });
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

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "Editar articulo";
      },
    },

    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },

    methods: {
      onFocus() {
        let stext = document.getElementById("onsearch");
        stext;
        stext = addEventListener("keyup", (e) => {
          if (e.altKey) {
            document.getElementById("onsearch").focus();
          }
        });
      },
      getColor(status) {
        if (status === "Agotado") return "red lighten-2";
        else if (status === "Disponible") return "orange lighten-2";
        else if (status === "En uso") return "blue lighten-2";
        else return "withe";
      },
      filterOnlyCapsText(value, search) {
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      },
      tiposync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;

        if (this.itemstt) {
          let tipo = this.itemstt;

          tipo.forEach((element) => {
            let datos = {
              tipo_id: element.tipo_id,
              name_tipo: element.name_tipo,
            };
            if (datos.name_tipo === recived) {
              tempid = datos.tipo_id;
              tempname = datos.name_tipo;
              this.selectt = tempid;
            }
          });
        }

        return this.selectt;
      },
      proveedorsync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;

        if (this.itemsp) {
          let proveedor = this.itemsp;
          proveedor.forEach((element) => {
            let datos = {
              proveedor_id: element.proveedor_id,
              nombre_proveedor: element.nombre_proveedor,
            };
            if (datos.nombre_proveedor === recived) {
              tempid = datos.proveedor_id;
              tempname = datos.nombre_proveedor;

              this.selectp = tempid;
            }
          });
        }
        return this.selectp;
      },
      marcasync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;

        if (this.itemstm) {
          let marca = this.itemstm;
          marca.forEach((element) => {
            let datos = {
              marca_id: element.marca_id,
              nombre_marca: element.nombre_marca,
            };
            if (datos.nombre_marca === recived) {
              tempid = datos.marca_id;
              tempname = datos.nombre_marca;

              this.selectm = tempid;
            }
          });
        }
        return this.selectm;
      },
      statusync(recived) {
        var tempid = "";
        var tempname = "";

        tempname;
        if (this.itemstst) {
          let status = this.itemstst;
          status.forEach((element) => {
            let datos = {
              status_id: element.status_id,
              nombre_status: element.nombre_status,
            };

            if (datos.nombre_status === recived) {
              tempid = datos.status_id;
              tempname = datos.nombre_status;

              this.selectst = tempid;
            }
          });
        }
        return this.selectst;
      },
      racksync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;
        if (this.itemsr) {
          let rack = this.itemsr;
          rack.forEach((element) => {
            let datos = {
              rack_id: element.rack_id,
              nombre_rack: element.nombre_rack,
            };
            if (datos.nombre_rack === recived) {
              tempid = datos.rack_id;
              tempname = datos.nombre_rack;

              this.selectr = tempid;
            }
          });
        }
        return this.selectr;
      },
      travesañosync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;
        if (this.itemsT) {
          let rack = this.itemsT;
          rack.forEach((element) => {
            let datos = {
              travesaño_id: element.travesaño_id,
              nombre_travesano: element.nombre_travesano,
            };
            if (datos.nombre_travesano === recived) {
              tempid = datos.travesaño_id;
              tempname = datos.nombre_travesano;

              this.selectT = tempid;
            }
          });
        }
        return this.selectT;
      },
      categsync(recived) {
        var tempid = "";
        var tempname = "";
        tempname;
        if (this.itemsc) {
          let categoria = this.itemsc;
          categoria.forEach((element) => {
            let datos = {
              categoria_id: element.categoria_id,
              nombre_categoria: element.nombre_categoria,
            };
            if (datos.nombre_categoria === recived) {
              tempid = datos.categoria_id;
              tempname = datos.nombre_categoria;

              this.selectc = tempid;
            }
          });
        }
        return this.selectc;
      },

      editItem(item) {
        this.editedIndex = this.articulosArray.indexOf(item);
        this.editedItem = Object.assign({}, item);

        //categoria
        if (this.editedItem.nombre_categoria) {
          let categoriasync = this.editedItem.nombre_categoria;
          this.categsync(categoriasync);
        }

        //tipo
        if (this.editedItem.name_tipo) {
          let tiposync = this.editedItem.name_tipo;

          this.tiposync(tiposync);
        }

        //proveedor
        let proveedorsync = this.editedItem.nombre_proveedor;
        this.proveedorsync(proveedorsync);

        //marca
        let marcasync = this.editedItem.nombre_marca;
        this.marcasync(marcasync);

        //status
        let statusync = this.editedItem.nombre_status;
        this.statusync(statusync);

        //rack
        let racksycn = this.editedItem.nombre_rack;
        this.racksync(racksycn);

        //travesaño
        let travesañosync = this.editedItem.nombre_travesano;
        this.travesañosync(travesañosync);

        this.dialog = true;
      },

      deleteItem(item) {
        this.editedIndex = this.articulosArray.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;

        let id = this.editedItem.id;
        deleteArticulos(id);
      },

      deleteItemConfirm() {
        this.articulosArray.splice(this.editedIndex, 1);
        this.closeDelete();
      },

      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.articulosArray[this.editedIndex], this.editedItem);
          let send = this.editedItem;

          let url = "api/articulo/";
          url = url + send.id;
          url = `${url}?${"nombre_articulo=" + send.nombre_articulo}&${
            "cantidad_articulo=" + send.cantidad_articulo
          }&${"categoria_id=" + this.selectc}&${"tipo_id=" + this.selectt}&${
            "marca_id=" + this.selectm
          }&${"proveedor_id=" + this.selectp}&${"status_id=" + this.selectst}&${
            "rack_id=" + this.selectr
          }&${"travesano_id=" + this.selectT}`;
          editArticulos(url);
          axios
            .put(url)
            .then((response) => {
              response;
              store.commit("increment", 1);
            })
            .catch((error) => console.log(error));
        } else {
          this.articulosArray.push(this.editedItem);
        }
        this.close();
      },
    },
  };
</script>

<style scoped>
  #tabla {
    width: 60rem;
  }
  .tabla {
    width: 60rem;
  }
</style>