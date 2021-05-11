<template >
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
            v-shortkey="['ctrl', 'shift', 'a']"
            @shortkey="dialogarticulo = !dialogarticulo"
            color="primary"
            text
            @click.native="dialogarticulo = !dialogarticulo"
          >
            Artículos
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
            v-shortkey="['ctrl', 'shift', 'c']"
            @shortkey="dialogcategoria = !dialogcategoria"
            color="primary"
            text
            @click="dialogcategoria = !dialogcategoria"
          >
            Categoría
          </v-btn>
        </v-row>
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
        <!--<v-row>
          <v-btn color="primary" text @click="dialogstatus = !dialogstatus">
            Status
          </v-btn>
        </v-row>-->

        <v-row><v-subheader>Ubicación</v-subheader></v-row>
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
        <v-row>
          <v-btn
            v-shortkey="['ctrl', 'shift', 'e']"
            @shortkey="dialogtravesaño = !dialogtravesaño"
            color="primary"
            text
            @click="dialogtravesaño = !dialogtravesaño"
          >
            Travesaño
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <creararticulo
      :key="count"
      :parentdialog="dialogarticulo"
      @dialogFromChild="syncFromArticulo($event)"
      :incomingsuccess="alertsuccess"
      @notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      @notifyproblem="syncToProblem($event)"
    />
    <crearcategoria
      :parentdialog="dialogcategoria"
      v-on:dialogFromChild="syncFromCategoria($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
    <crearmarca
      :parentdialog="dialogmarca"
      v-on:dialogFromChild="syncFromMarca($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
    <creartipo
      :parentdialog="dialogtipo"
      v-on:dialogFromChild="syncFromTipo($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
    <crearproveedor
      :parentdialog="dialogproveedor"
      v-on:dialogFromChild="syncFromProveedor($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
    <!--<crearstatus
      :parentdialog="dialogstatus"
      v-on:dialogFromChild="syncFromStatus($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />-->

    <crearrack
      :parentdialog="dialograck"
      v-on:dialogFromChild="syncFromRack($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
    <creartravesaño
      :parentdialog="dialogtravesaño"
      v-on:dialogFromChild="syncFromTravesaño($event)"
      :incomingsuccess="alertsuccess"
      v-on:notifysuccess="syncToSuccess($event)"
      :incomingproblem="alertproblem"
      v-on:notifyproblem="syncToProblem($event)"
    />
  </v-card>
</template>

<script>
  import creararticulo from "../cruds/creararticulos.vue";
  import crearcategoria from "../cruds/crearcategoria.vue";
  import crearmarca from "../cruds/crearmarca.vue";
  import creartipo from "../cruds/creartipo.vue";
  import crearproveedor from "../cruds/crearproveedor.vue";

  //import crearstatus from "../cruds/crearstatus.vue";

  import crearrack from "../cruds/crearrack.vue";
  import creartravesaño from "../cruds/creartravesaño.vue";
  import store from "@/store";

  export default {
    name: "crearlist",
    props: {
      incomingsuccess: { type: Boolean },
      incomingproblem: { type: Boolean },
    },
    components: {
      creararticulo,
      crearcategoria,
      crearmarca,
      creartipo,
      crearproveedor,
      //crearstatus,
      crearrack,
      creartravesaño,
    },
    computed: {
      count() {
        return store.getters.counter;
      },
    },
    methods: {
      syncToSuccess(updatedDialog) {
        this.alertsuccess = updatedDialog;
      },
      syncToProblem(updatedDialog) {
        this.alertproblem = updatedDialog;
      },
      syncFromArticulo(updatedDialog) {
        this.dialogarticulo = updatedDialog;
      },
      syncFromCategoria(updatedDialog) {
        this.dialogcategoria = updatedDialog;
      },
      syncFromMarca(updatedDialog) {
        this.dialogmarca = updatedDialog;
      },
      syncFromTipo(updatedDialog) {
        this.dialogtipo = updatedDialog;
      },
      syncFromProveedor(updatedDialog) {
        this.dialogproveedor = updatedDialog;
      },
      /*syncFromStatus(updatedDialog) {
                                                        this.dialogstatus = updatedDialog;
                                                      },*/
      syncFromRack(updatedDialog) {
        this.dialograck = updatedDialog;
      },
      syncFromTravesaño(updatedDialog) {
        this.dialogtravesaño = updatedDialog;
      },
    },
    data: () => ({
      dialogarticulo: false,
      dialogcategoria: false,
      dialogmarca: false,
      dialogtipo: false,
      dialogproveedor: false,
      //dialogstatus: false,
      dialograck: false,
      dialogtravesaño: false,
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
    height: 22em;
  }
</style>