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
            v-shortkey="['ctrl', 'shift', 'u']"
            @shortkey="dialogusuarios = !dialogusuarios"
            color="primary"
            text
            @click="dialogusuarios = !dialogusuarios"
          >
            Usuarios
          </v-btn>
        </v-row>
        <!-- <v-row>
          <v-btn color="primary" text @click="dialogrol = !dialogrol">
            Rol
          </v-btn>
        </v-row>-->
      </v-col>
    </v-row>

    <crearusuario
      :key="count"
      :parentdialog="dialogusuarios"
      v-on:dialogFromChild="syncFromUsuario($event)"
    />
    <!--
    <crearrol
      :parentdialog="dialogrol"
      v-on:dialogFromChild="syncFromRol($event)"
     
    />-->
  </v-card>
</template>

<script>
  import crearusuario from "../cruds/crearusuario.vue";
  //import crearrol from "../cruds/crearrol.vue";
  import store from "@/store";
  export default {
    name: "crearlist",

    components: {
      crearusuario,
      //crearrol,
    },
    computed: {
      count() {
        return store.getters.counter;
      },
    },
    methods: {
      syncFromUsuario(updatedDialog) {
        this.dialogusuarios = updatedDialog;
      },
      syncFromRol(updatedDialog) {
        this.dialogrol = updatedDialog;
      },
    },
    data: () => ({
      dialogusuarios: false,
      dialogrol: false,
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