<template>
  <div id="app">
    <div id="nav">
      <v-toolbar
        dense
        flat
      >
      <!--<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->
      <v-spacer></v-spacer>
      <v-toolbar-title  class="text-uppercase grey--text"><code class="font-weight-light">Pocket</code><strong>stock</strong></v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer 
      expand-on-hover
      app
      v-model="drawer" 
      
      
      >
      <v-list dense flat>
        <v-subheader  class="font-weight-light">Pocketstock</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/" text flat x-small>Lista de clientes<v-icon>mdi-account-multiple</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/about" text flat x-small>Lista de alimentos<v-icon>mdi-folder</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/crearusuario" text flat x-small>Crear usuarios<v-icon>mdi-account</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/creararticulos" text flat x-small>Crear articulos<v-icon>mdi-folder</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-subheader>Categorias</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/electriclist" text flat x-small>Electricidad<v-icon>mdi-account-multiple</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/plomerialist" text flat x-small>Plomeria<v-icon>mdi-folder</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title ><v-btn to="/crearusuario" text flat x-small>A/C<v-icon>mdi-account</v-icon></v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script>
export default {
  name:'sidebar',
  data: () => ({
    drawer:true,

  }),
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 15%;
  height: 15%;
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
