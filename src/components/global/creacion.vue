<template>
  <!--
  En esta tarjeta se encuentra el listado de componentes para crear todos los elementos
  dentro del sistema.
-->
  <v-card class="list-card">
    <v-row>
      <v-col align-self="end" cols="2">
        <v-row>
          <v-btn color="primary" text @click="dialogarticulo = !dialogarticulo">
            Articulos
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
            color="primary"
            text
            @click="dialogcategoria = !dialogcategoria"
          >
            Categoria
          </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click="dialogmarca = !dialogmarca">
            Marca
          </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click="dialogtipo = !dialogtipo">
            Tipo
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
            color="primary"
            text
            @click="dialogproveedor = !dialogproveedor"
          >
            Proveedor
          </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click="dialogstatus = !dialogstatus">
            Status
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
            color="primary"
            text
            @click="dialogubicacion = !dialogubicacion"
          >
            Ubicación
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <creararticulo
      :parentdialog="dialogarticulo"
      v-on:dialogFromChild="syncFromArticulo($event)"
    />
    <crearcategoria
      :parentdialog="dialogcategoria"
      v-on:dialogFromChild="syncFromCategoria($event)"
    />
    <crearmarca
      :parentdialog="dialogmarca"
      v-on:dialogFromChild="syncFromMarca($event)"
    />
    <creartipo
      :parentdialog="dialogtipo"
      v-on:dialogFromChild="syncFromTipo($event)"
    />
    <crearproveedor
      :parentdialog="dialogproveedor"
      v-on:dialogFromChild="syncFromProveedor($event)"
    />
    <crearstatus
      :parentdialog="dialogstatus"
      v-on:dialogFromChild="syncFromStatus($event)"
    />
    <crearubicacion
      :parentdialog="dialogubicacion"
      v-on:dialogFromChild="syncFromUbicacion($event)"
    />
  </v-card>
</template>

<script>
  import creararticulo from "../cruds/creararticulos.vue";
  import crearcategoria from "../cruds/crearcategoria.vue";
  import crearmarca from "../cruds/crearmarca.vue";
  import creartipo from "../cruds/creartipo.vue";
  import crearproveedor from "../cruds/crearproveedor.vue";

  import crearstatus from "../cruds/crearstatus.vue";
  import crearubicacion from "../cruds/crearubicacion.vue";
  export default {
    name: "crearlist",
    components: {
      creararticulo,
      crearcategoria,
      crearmarca,
      creartipo,
      crearproveedor,
      crearubicacion,
      crearstatus,
    },
    methods: {
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
      syncFromStatus(updatedDialog) {
        this.dialogstatus = updatedDialog;
      },
      syncFromUbicacion(updatedDialog) {
        this.dialogubicacion = updatedDialog;
      },
    },
    data: () => ({
      dialogarticulo: false,
      dialogcategoria: false,
      dialogmarca: false,
      dialogtipo: false,
      dialogproveedor: false,
      dialogstatus: false,
      dialogubicacion: false,
    }),
  };
</script>
<style scoped>
  .list-card {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 1em;

    height: 16.5em;
  }
</style>