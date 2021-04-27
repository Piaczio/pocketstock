<template>
  <div class="no-scroll">
    <v-row>
      <v-col id="table-article" md="10">
        <tablacategoria />
      </v-col>
      <v-col id="creation" sm="2" md="2">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablacategoria from "../components/table-lists/tabla-categoria.vue";
  import creacionlist from "../components/global/creacion-categoria.vue";
  export default {
    name: "categorias",
    components: { tablacategoria, creacionlist },
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