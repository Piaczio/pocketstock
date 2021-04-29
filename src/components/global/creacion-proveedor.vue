
<template>
  <!--
  En esta tarjeta se encuentra el listado de componentes para crear todos los elementos
  dentro del sistema.
-->
  <v-card class="list-card">
    <v-snackbar
      dense
      color="success"
      outlined
      :value="alertsuccess"
      :timeout="timeout"
      rounded="pill"
      top
    >
      ¡Guardado exitosamente!
    </v-snackbar>
    <v-snackbar
      dense
      color="danger"
      outlined
      :value="alertproblem"
      :timeout="timeout"
      rounded="pill"
      top
    >
      ¡Oops hubo un problema!
    </v-snackbar>
    <v-row>
      <v-col align-self="end" cols="2">
        <v-row>
          <v-btn
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
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
  </v-card>
</template>

<script>
  import crearproveedor from "../cruds/crearproveedor.vue";

  export default {
    name: "crearlist",
    props: {
      incomingsuccess: { type: Boolean },
      incomingproblem: { type: Boolean },
    },
    components: {
      crearproveedor,
    },
    methods: {
      syncToSuccess(updatedDialog) {
        this.alertsuccess = updatedDialog;
      },
      syncToProblem(updatedDialog) {
        this.alertproblem = updatedDialog;
      },
      syncFromProveedor(updatedDialog) {
        this.dialogproveedor = updatedDialog;
      },
    },
    data: () => ({
      dialogproveedor: false,

      alertsuccess: false,
      alertproblem: false,
      timeout: 2000,
    }),
  };
</script>
<style scoped>
  .list-card {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 1em;

    height: 4em;
  }
</style>