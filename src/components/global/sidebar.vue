<template>
  <div id="app">
    <div id="nav">
      <v-toolbar dense flat>
        <!--<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

        <v-spacer></v-spacer>
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

            <v-list dense flat>
              <v-list-item
                v-for="item in itemsmain"
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

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Campos</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="item in itemstable"
              :key="item.title"
              link
              dense
              flat
              :to="item.path"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>

              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
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
    components: {},
    data: () => ({
      itemsmain: [
        { path: "/home", title: "Home", icon: "mdi-home" },
        { path: "/usuarios", title: "Usuarios", icon: "mdi-account-multiple" },
        {
          path: "/articulos",
          title: "Artículos",
          icon: "mdi-folder-multiple",
        },
      ],
      itemstable: [
        {
          path: "/categorias",
          title: "Categorias",
          icon: "mdi-folder-multiple",
        },
        {
          path: "/marcas",
          title: "Marcas",
          icon: "mdi-folder-multiple",
        },
        {
          path: "/proveedores",
          title: "Proveedores",
          icon: "mdi-folder-multiple",
        },
      ],
    }),
    methods: {
      logout() {
        let commit = (store.state.token = null);

        this.$store.dispatch("logout", commit);
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
