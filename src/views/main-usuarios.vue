<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablausuarios v-if="hasrol === 1" :key="count" />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionuserlist v-if="hasrol === 1" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablausuarios from "../components/table-lists/tabla-usuarios.vue";
  import creacionuserlist from "../components/global/creacion-user.vue";
  import store from "@/store";
  export default {
    name: "artículos",
    components: { tablausuarios, creacionuserlist },
    computed: {
      count() {
        return store.getters.counter;
      },
      hasrol() {
        return store.getters.hasrol;
      },
    },
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