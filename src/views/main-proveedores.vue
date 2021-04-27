<template>
  <div class="no-scroll">
    <v-row>
      <v-col id="table-article" md="10">
        <tablaproveedor />
      </v-col>
      <v-col id="creation" sm="2" md="2">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablaproveedor from "../components/table-lists/tabla-proveedor.vue";
  import creacionlist from "../components/global/creacion-proveedor.vue";
  export default {
    name: "marcas",
    components: { tablaproveedor, creacionlist },
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