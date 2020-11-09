<template>
  <div id="app">
    <div id="nav">
      <v-toolbar
        dense
        flat
      >
          <v-toolbar-items>
            <v-btn to="/" text flat small>Lista de clientes<v-icon>mdi-account-multiple</v-icon></v-btn>
            <v-btn to="/about" text flat small>Lista de alimentos<v-icon>mdi-folder</v-icon></v-btn>
            <v-btn to="/crearusuario" text flat small>Crear usuario<v-icon>mdi-folder</v-icon></v-btn>
          </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

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
