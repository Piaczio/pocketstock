<template>
  <div id="app">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="search"
          label="Buscar marca"
          class="mx-4"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="marcaArray"
        sort-by="cantidad_articulo"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText.toUpperCase"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tabla marca</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <h1 class="headline">{{ formTitle }}</h1>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre_marca"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >¿Estas seguro de querer eliminarlo?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Aceptar</v-btn
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
          <span>Datos no disponibles.</span>
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
    nombre_marca: "tabla-marca",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: "",

      headers: [
        {
          text: "Marcas",
          align: "start",
          sortable: false,
          value: "nombre_marca",
        },

        { text: "Acciones", value: "actions", sortable: false },
      ],

      marcaArray: [],
      //variable en la que se deposita la posicion en el selector
      selectrol: null, //Rol

      //Array en el que se deposita de los selectores.
      itemsrol: [], //Rol

      editedIndex: -1,
      editedItem: {
        id: "",
        nombre_marca: "",
      },
      defaultItem: {
        id: "",
        nombre_marca: "",
      },
    }),
    mounted() {
      axios
        .get("api/marca")
        .then((response) => {
          let marca = response.data;
          console.log("Categoria response:", marca);
          marca.forEach((element) => {
            let datos = {
              id: element.id,
              nombre_marca: element.nombre_marca,
            };
            if (!datos) return;
            this.marcaArray.push(datos);
          });
        })
        .catch((error) => console.log(error));
    },

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "Editar marca";
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
      filterOnlyCapsText(value, search) {
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      },

      editItem(item) {
        this.editedIndex = this.marcaArray.indexOf(item);
        this.editedItem = Object.assign({}, item);

        this.dialog = true;
      },

      deleteItem(item) {
        this.editedIndex = this.marcaArray.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;

        let id = this.editedItem.id;
        axios.delete("api/marca/" + id).catch((error) => console.log(error));
      },

      deleteItemConfirm() {
        this.marcaArray.splice(this.editedIndex, 1);
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
          Object.assign(this.marcaArray[this.editedIndex], this.editedItem);
          let send = this.editedItem;
          let url = "api/marca/";
          console.log("edit method:", url + send.id);
          url = url + send.id;
          url = `${url}?${"nombre_marca=" + send.nombre_marca}`;

          console.log("edit method:", url);
          axios
            .put(url)
            .then((response) => {
              console.log("Si se pudo:", response.data);
            })
            .catch((error) => console.log(error));
        } else {
          this.marcaArray.push(this.editedItem);
        }
        this.close();
      },
    },
  };
</script>

<style scoped>
</style>