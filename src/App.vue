<template>
  <div id="app">
    <v-snackbar
      dense
      text
      type="success"
      outlined
      :value="hassuccess"
      :timeout="timeout"
      top
    >
      ¡Guardado exitosamente!
    </v-snackbar>
    <v-snackbar
      dense
      color="danger"
      outlined
      :value="hasdanger"
      :timeout="timeout"
      top
    >
      ¡Oops hubo un problema!
    </v-snackbar>
    <vue-extend-layouts />
  </div>
</template>
<script>
  import VueExtendLayouts from "vue-extend-layout";
  import store from "@/store";
  export default {
    name: "App",
    components: {
      VueExtendLayouts,
    },
    data: () => ({
      timeout: 2000,
    }),
    computed: {
      hassuccess() {
        return store.getters.hassuccess;
      },
      hasdanger() {
        return store.getters.hasdanger;
      },
    },
    created() {
      /*para ejecutar lo que yo quiera automaticamente*/
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="scss">
  p {
    text-transform: lowercase;
    font-size: 14px;
  }
  span {
    text-transform: lowercase;
    font-size: 14px;
  }
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
