<template>
  <div class="no-scroll">
    <v-row>
      <v-col id="table-article" md="10">
        <generalarticulos />
      </v-col>
      <v-col sm="2" md="2">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import generalarticulos from "../components/table-lists/general_articulos.vue";
  import creacionlist from "../components/global/creacion.vue";
  export default {
    name: "articulos",
    components: { generalarticulos, creacionlist },
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
</style>