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
            v-shortkey="['ctrl', 'shift', 't']"
            @shortkey="dialogtipo = !dialogtipo"
            color="primary"
            text
            @click="dialogtipo = !dialogtipo"
          >
            Tipo
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <creartipo
      :parentdialog="dialogtipo"
      v-on:dialogFromChild="syncFromTipo($event)"
    />
  </v-card>
</template>

<script>
  import creartipo from "../cruds/creartipo.vue";

  export default {
    name: "crearlist",

    components: {
      creartipo,
    },
    methods: {
      syncFromTipo(updatedDialog) {
        this.dialogtipo = updatedDialog;
      },
    },
    data: () => ({
      dialogtipo: false,
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