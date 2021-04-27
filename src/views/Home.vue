<template>
  <div class="no-scroll">
    <v-row
      ><v-col id="table-article" md="12"><tableCampos /></v-col
    ></v-row>
  </div>
</template>
<script>
  import tableCampos from "../components/table-lists/table-campos.vue";
  // @ is an alias to /src
  export default {
    name: "home",
    components: { tableCampos },
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
