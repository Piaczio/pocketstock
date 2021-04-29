<template>
  <div class="no-scroll">
    <v-row>
      <v-col id="table-article" md="10">
        <tablaArticulos />
      </v-col>
      <v-col id="creation" sm="2" md="2">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablaArticulos from "../components/table-lists/tabla-articulos.vue";
  import creacionlist from "../components/global/creacion.vue";
  export default {
    name: "artículos",
    components: { tablaArticulos, creacionlist },
  };
</script>

<style scoped>
  .no-scroll {
    position: -webkit-sticky;
    position: sticky;
    top: 20rem;
  }
  #table-article {
    padding-left: 15rem;
  }
  #creation {
    padding-top: 5.1rem;
  }
</style>