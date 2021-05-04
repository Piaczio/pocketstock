<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablaArticulos :key="count" />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionlist v-if="hasrol === 1" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablaArticulos from "../components/table-lists/tabla-articulos.vue";
  import creacionlist from "../components/global/creacion.vue";
  import store from "@/store";
  export default {
    name: "artículos",

    components: { tablaArticulos, creacionlist },
    data: () => ({}),
    methods: {
      /*para definir metodos*/
    },
    created() {
      /*para ejecutar lo que yo quiera automaticamente*/
    },
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