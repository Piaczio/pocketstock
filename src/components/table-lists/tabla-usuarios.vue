<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="usersArray"
        sort-by="cantidad_articulo"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Tabla usuarios</v-toolbar-title>
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
                          v-model="editedItem.name"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.email"
                          type="email"
                          label="Correo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="selectrol"
                          :items="itemsrol"
                          v-on="categ()"
                          item-text="name_rol"
                          item-value="rol_id"
                          label="Rol"
                        ></v-select>
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
    name: "tabla-usuarios",
    data: () => ({
      dialog: false,
      dialogDelete: false,

      headers: [
        {
          text: "Usuarios",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Correo", value: "email" },
        { text: "Rol", value: "name_rol" },

        { text: "Actions", value: "actions", sortable: false },
      ],

      usersArray: [],
      //variable en la que se deposita la posicion en el selector
      selectrol: null, //Rol

      //Array en el que se deposita de los selectores.
      itemsrol: [], //Rol

      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        email: "",
        name_rol: "",
      },
      defaultItem: {
        id: "",
        name: "",
        email: "",
        name_rol: "",
      },
    }),
    mounted() {
      axios
        .get("api/user")
        .then((response) => {
          let user = response.data;
          console.log("User response:", user);
          user.forEach((element) => {
            let datos = {
              id: element.id,
              name: element.name,
              email: element.email,
              name_rol: element.name_rol,
            };
            if (!datos) return;
            this.usersArray.push(datos);
          });
        })
        .catch((error) => console.log(error));

      axios
        .get("api/rol")
        .then((response) => {
          let categorias = response.data;

          categorias.forEach((element) => {
            let datos = {
              rol_id: element.id,
              name_rol: element.name_rol,
            };

            if (!datos) return;
            this.itemsrol.push(datos);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    },

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "Editar usuario";
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
      categ(recived) {
        var tempid = null;
        var tempname = null;
        tempname;
        if (this.itemsrol) {
          let rol = this.itemsrol;
          rol.forEach((element) => {
            let datos = {
              rol_id: element.rol_id,
              name_rol: element.name_rol,
            };
            if (datos.name_rol === recived) {
              tempid = datos.rol_id;
              tempname = datos.name_rol;

              this.selectrol = tempid;
            }
          });
        }

        return tempid;
      },

      editItem(item) {
        this.editedIndex = this.usersArray.indexOf(item);
        this.editedItem = Object.assign({}, item);

        if (this.editedItem.name_rol) {
          //categoria
          this.categ(this.editedItem.name_rol);
        }

        this.dialog = true;
      },

      deleteItem(item) {
        this.editedIndex = this.usersArray.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;

        let id = this.editedItem.id;
        axios.delete("api/user/" + id).catch((error) => console.log(error));
      },

      deleteItemConfirm() {
        this.usersArray.splice(this.editedIndex, 1);
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
          Object.assign(this.usersArray[this.editedIndex], this.editedItem);
          let send = this.editedItem;
          let url = "api/user/";
          console.log("edit method:", url + send.id);
          url = url + send.id;
          url = `${url}?${"name=" + send.name}&${"email=" + send.email}&${
            "rol_id=" + this.selectrol
          }`;

          console.log("edit method:", url);
          axios
            .put(url)
            .then((response) => {
              console.log("Si se pudo:", response.data);
            })
            .catch((error) => console.log(error));
        } else {
          this.usersArray.push(this.editedItem);
        }
        this.close();
      },
    },
  };
</script>

<style scoped>
</style>