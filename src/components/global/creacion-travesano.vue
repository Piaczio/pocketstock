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
            v-shortkey="['ctrl', 'shift', 'e']"
            @shortkey="dialogtravesano = !dialogtravesano"
            color="primary"
            text
            @click="dialogtravesano = !dialogtravesano"
          >
            Travesaño
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <creartravesano
      :parentdialog="dialogtravesano"
      v-on:dialogFromChild="syncFromCategoria($event)"
    />
  </v-card>
</template>

<script>
  import creartravesano from "../cruds/creartravesaño.vue";

  export default {
    name: "crearlist",

    components: {
      creartravesano,
    },
    methods: {
      syncFromCategoria(updatedDialog) {
        this.dialogtravesano = updatedDialog;
      },
    },
    data: () => ({
      dialogtravesano: false,
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