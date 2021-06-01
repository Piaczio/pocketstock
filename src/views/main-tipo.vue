<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablatipo :key="count" />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablatipo from "../components/table-lists/tabla-tipo.vue";
  import store from "@/store";
  import creacionlist from "../components/global/creacion-tipo.vue";
  export default {
    name: "tipo",
    components: { tablatipo, creacionlist },
    computed: {
      count() {
        return store.getters.counter;
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