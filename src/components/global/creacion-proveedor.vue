
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
            v-shortkey="['ctrl', 'shift', 'p']"
            @shortkey="dialogproveedor = !dialogproveedor"
            color="primary"
            text
            @click="dialogproveedor = !dialogproveedor"
          >
            Proveedor
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <crearproveedor
      :parentdialog="dialogproveedor"
      v-on:dialogFromChild="syncFromProveedor($event)"
    />
  </v-card>
</template>

<script>
  import crearproveedor from "../cruds/crearproveedor.vue";

  export default {
    name: "crearlist",
    components: {
      crearproveedor,
    },
    methods: {
      syncFromProveedor(updatedDialog) {
        this.dialogproveedor = updatedDialog;
      },
    },
    data: () => ({
      dialogproveedor: false,
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