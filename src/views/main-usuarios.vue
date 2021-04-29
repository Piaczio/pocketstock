<template>
  <div class="no-scroll">
    <v-row>
      <v-col id="table-article" md="10">
        <tablausuarios />
      </v-col>
      <v-col id="creation" sm="2" md="2">
        <creacionuserlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablausuarios from "../components/table-lists/tabla-usuarios.vue";
  import creacionuserlist from "../components/global/creacion-user.vue";
  export default {
    name: "artículos",
    components: { tablausuarios, creacionuserlist },
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