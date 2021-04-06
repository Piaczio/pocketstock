<template>
  <div>
    <v-row>
      <v-col>
        <creararticulos />
      </v-col>
      <v-col align-self="end" cols="2">
        <v-row>
          <v-btn color="primary" text @click="onClickOpen">
            Categoria {{ dialog }}
          </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click.stop="dialog = true">
            Marca
          </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click.stop="dialog = true"> Tipo </v-btn>
        </v-row>
        <v-row>
          <v-btn color="primary" text @click.stop="dialog = true">
            Proveedor
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <crearcategoria
      :parentdialog="dialog"
      v-on:dialogFromChild="syncFromChild($event)"
    />
  </div>
</template>

<script>
  import crearcategoria from "../cruds/crearcategoria.vue";
  import creararticulos from "../cruds/creararticulos.vue";
  export default {
    name: "crearusuario",
    components: {
      creararticulos,
      crearcategoria,
    },
    methods: {
      syncFromChild(updatedDialog) {
        this.dialog = updatedDialog;
      },
      onClickOpen() {
        this.dialog = !this.dialog;
      },
    },
    data: () => ({
      dialog: false,
    }),
  };
</script>

<style >
  html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
</style>