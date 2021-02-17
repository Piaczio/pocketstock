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
        <v-toolbar-title class="text-uppercase grey--text"
          ><code class="font-weight-light">Pocket</code
          ><strong>stock</strong></v-toolbar-title
        >
      </v-toolbar>
      <v-navigation-drawer expand-on-hover app v-model="drawer">
        <v-list dense text>
          <v-subheader class="font-weight-light">Pocketstock</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-btn to="/home" text flat
                  >Home<v-icon>mdi-home</v-icon></v-btn
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-btn to="/crearusuario" text flat
                  >Crear usuarios<v-icon>mdi-account</v-icon></v-btn
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn to="/creararticulos" text flat
                  >Crear articulos<v-icon>mdi-folder</v-icon></v-btn
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-subheader>Categorias</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-btn to="/general_articulos" text flat
                  >Artículos<v-icon>mdi-folder</v-icon></v-btn
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn to="/userslist" text flat
                  >Lista de clientes<v-icon>mdi-account-multiple</v-icon></v-btn
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-subheader>Usuario y configuración</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-btn class="mr-3" v-on:click="logout()" text> Logout </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
export default {
  name: "sidebar",
  data: () => ({
    drawer: true,
    components: {},
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
