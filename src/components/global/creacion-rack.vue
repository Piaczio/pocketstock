<template>
  <!--
  En esta tarjeta se encuentra el listado de componentes para crear todos los elementos
  dentro del sistema.
-->
  <v-card class="list-card">
    <v-row>
      <v-col align-self="end" cols="2">
        <v-row>
          <v-btn
            v-shortkey="['ctrl', 'shift', 'r']"
            @shortkey="dialograck = !dialograck"
            color="primary"
            text
            @click="dialograck = !dialograck"
          >
            Rack
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <crearrack
      :parentdialog="dialograck"
      v-on:dialogFromChild="syncFromRack($event)"
    />
  </v-card>
</template>

<script>
  import crearrack from "../cruds/crearrack.vue";

  export default {
    name: "creacionrack",

    components: {
      crearrack,
    },
    methods: {
      syncFromRack(updatedDialog) {
        this.dialograck = updatedDialog;
      },
    },
    data: () => ({
      dialograck: false,
    }),
  };
</script>
<style scoped>
  .list-card {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 1em;

    width: 7rem;
    height: 3em;
  }
</style>