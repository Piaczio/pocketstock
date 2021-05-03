<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablaproveedor />
      </v-col>
      <v-col id="creation" sm="1" md="1">
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
    padding: 0 0 0 14rem;
  }
  #creation {
    padding: 4.5rem 0 0 0;
  }
</style>