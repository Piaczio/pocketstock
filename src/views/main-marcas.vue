<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablamarca />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablamarca from "../components/table-lists/tabla-marca.vue";
  import creacionlist from "../components/global/creacion-marca.vue";
  export default {
    name: "marcas",
    components: { tablamarca, creacionlist },
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



