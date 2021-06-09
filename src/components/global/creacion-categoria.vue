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
            v-shortkey="['ctrl', 'shift', 'c']"
            @shortkey="dialogcategoria = !dialogcategoria"
            color="primary"
            text
            @click="dialogcategoria = !dialogcategoria"
          >
            Categoria
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <crearcategoria
      :parentdialog="dialogcategoria"
      v-on:dialogFromChild="syncFromCategoria($event)"
    />
  </v-card>
</template>

<script>
  import crearcategoria from "../cruds/crearcategoria.vue";

  export default {
    name: "crearlist",

    components: {
      crearcategoria,
    },
    methods: {
      syncFromCategoria(updatedDialog) {
        this.dialogcategoria = updatedDialog;
      },
    },
    data: () => ({
      dialogcategoria: false,
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