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
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
  </v-card>
</template>

<script>
  import creartravesano from "../cruds/creartravesaño.vue";

  export default {
    name: "crearlist",
    props: {
      incomingsuccess: { type: Boolean },
      incomingproblem: { type: Boolean },
    },
    components: {
      creartravesano,
    },
    methods: {
      syncToSuccess(updatedDialog) {
        this.alertsuccess = updatedDialog;
      },
      syncToProblem(updatedDialog) {
        this.alertproblem = updatedDialog;
      },
      syncFromCategoria(updatedDialog) {
        this.dialogtravesano = updatedDialog;
      },
    },
    data: () => ({
      dialogtravesano: false,

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

    width: 7rem;
    height: 3em;
  }
</style>