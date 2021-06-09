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
            v-shortkey="['ctrl', 'shift', 'm']"
            @shortkey="dialogmarca = !dialogmarca"
            color="primary"
            text
            @click="dialogmarca = !dialogmarca"
          >
            Marca
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <crearmarca
      :parentdialog="dialogmarca"
      v-on:dialogFromChild="syncFromMarca($event)"
    />
  </v-card>
</template>

<script>
  import crearmarca from "../cruds/crearmarca.vue";

  export default {
    name: "crearlist",

    components: {
      crearmarca,
    },
    methods: {
      syncFromMarca(updatedDialog) {
        this.dialogmarca = updatedDialog;
      },
    },
    data: () => ({
      dialogmarca: false,
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