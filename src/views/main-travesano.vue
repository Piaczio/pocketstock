<template>
  <div class="no-scroll">
    <v-row cols="12">
      <v-col id="table-article" sm="10" md="11">
        <tablatravesano :key="count" />
      </v-col>
      <v-col id="creation" sm="1" md="1">
        <creacionlist />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import tablatravesano from "../components/table-lists/table-travesano.vue";
  import store from "@/store";
  import creacionlist from "../components/global/creacion-travesano.vue";
  export default {
    name: "travesaño",
    components: { tablatravesano, creacionlist },
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