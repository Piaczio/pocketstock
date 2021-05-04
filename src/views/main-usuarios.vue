<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablausuarios v-show="hasrol === 1" :key="count" />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionuserlist v-show="hasrol === 1" />
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
        /*contador que apoya en actualizar la tabla en cada cambion en la numeracion*/
        return store.getters.counter;
      },
      hasrol() {
        /*para obtener el rol al que pertenece el usuario y dependiendo de eso podra observar el componente */
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