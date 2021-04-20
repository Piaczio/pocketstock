<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="articulosArray"
        sort-by="cantidad_articulo"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tabla Articulos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_articulo"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.cantidad_articulo"
                          label="Cantidad"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_categoria"
                          label="Categoria"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name_tipo"
                          label="Tipo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_marca"
                          label="Marca"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_proveedor"
                          label="Proveedor"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_status"
                          label="Status"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_rack"
                          label="Rack"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_travesaño"
                          label="Travesaño"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
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
                <v-card-actions>
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
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
  import axios from "axios";
  //axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    components: {},
    data: () => ({
      dialog: false,
      dialogDelete: false,

      headers: [
        {
          text: "Articulo",
          align: "start",
          sortable: false,
          value: "nombre_articulo",
        },
        { text: "Cantidad", value: "cantidad_articulo" },
        { text: "Categoria", value: "nombre_categoria" },
        { text: "Tipo", value: "name_tipo" },
        { text: "Marca", value: "nombre_marca" },
        { text: "Proveedor", value: "nombre_proveedor" },
        { text: "Status", value: "nombre_status" },
        { text: "Rack", value: "nombre_rack" },
        { text: "Travesaño", value: "nombre_travesaño" },
        { text: "Actions", value: "actions", sortable: false },
      ],

      articulosArray: [],
      editedIndex: -1,
      editedItem: {
        nombre_articulo: "",
        cantidad_articulo: 0,
        nombre_categoria: 0,
        name_tipo: 0,
        nombre_marca: 0,
        nombre_proveedor: 0,
        nombre_status: 0,
        nombre_rack: 0,
        nombre_travesaño: 0,
      },
      defaultItem: {
        nombre_articulo: "",
        cantidad_articulo: 0,
        nombre_categoria: "",
        name_tipo: "",
        nombre_marca: "",
        nombre_proveedor: "",
        nombre_status: "",
        nombre_rack: "",
        nombre_travesaño: "",
      },
    }),
    mounted() {
      axios
        .get("api/articulo")
        .then((response) => {
          let articulos = response.data;
          articulos.forEach((element) => {
            let datos = {
              nombre_articulo: element.nombre_articulo,
              cantidad_articulo: element.cantidad_articulo,
              descripcion_articulo: element.descripcion_articulo, //pendiente
              nombre_categoria: element.nombre_categoria,
              name_tipo: element.name_tipo,
              nombre_marca: element.nombre_marca,
              nombre_proveedor: element.nombre_proveedor,
              nombre_status: element.nombre_status,
              //campos de ubicación
              nombre_rack: element.nombre_rack,
              nombre_travesaño: element.nombre_travesaño,
            };
            if (!datos) return;
            this.articulosArray.push(datos);
          });
        })
        .catch((error) => console.log(error));
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

    created() {
      this.initialize();
    },

    methods: {
      initialize() {},

      editItem(item) {
        this.editedIndex = this.articulosArray.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      deleteItem(item) {
        this.editedIndex = this.articulosArray.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
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
        } else {
          this.articulosArray.push(this.editedItem);
        }
        this.close();
      },
    },
  };
</script>

<style scoped>
</style>