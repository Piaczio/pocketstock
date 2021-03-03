<template>
  <div id="app">
    <div id="nav">
      <v-toolbar dense flat>
        <!--<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

        <v-spacer></v-spacer>
        <v-btn style="width: 110.095px; height: 34.016px; border-radius: 7px">
          <img
            src="@/assets/Add-to-Apple-Wallet/Add to Apple Wallet Badges/ES/web/Add_to_Apple_Wallet_rgb_ES.svg"
          />
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer permanent app>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="font-size: 30px"
                  class="text-uppercase grey--text title"
                >
                  <code class="font-weight-light">Pocket</code
                  ><strong>stock</strong>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.path"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn class="mr-6" v-on:click="logout()" text>
              Cerrar sesión
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script>
  import store from "@/store.js";
  export default {
    name: "sidebar",
    data: () => ({
      components: {},
      items: [
        { path: "/home", title: "Home", icon: "mdi-home" },
        { path: "/crearusuario", title: "Crear usuario", icon: "mdi-account" },
        { path: "/creararticulos", title: "Crear articulo", icon: "mdi-folder" },
        { path: "/crearcategoria", title: "Crear categoria", icon: "mdi-folder" },
        { path: "/crearmarca", title: "Crear marca", icon: "mdi-folder" },
        { path: "/crearproveedor", title: "Crear proveedor", icon: "mdi-folder" },
        { path: "/crearstatus", title: "Crear status", icon: "mdi-folder" },
        { path: "/creartipo", title: "Crear tipo", icon: "mdi-folder" },
        { path: "/crearubicacion", title: "Crear ubicacion", icon: "mdi-folder" },
        {
          path: "/general_articulos",
          title: "Articulos",
          icon: "mdi-folder-multiple",
        },
        {
          path: "/categoria_list",
          title: "Categorias",
          icon: "mdi-folder-multiple",
        },
        { path: "/userslist", title: "Clientes", icon: "mdi-account-multiple" },
      ],
    }),
    methods: {
      logout() {
        (store.user = null), (store.email = null);
        this.$router.push("/");
      },
    },
  };
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
