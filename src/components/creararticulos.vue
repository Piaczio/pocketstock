<template>
<div class="foodtable">
<div id="app">
  <v-app id="inspire">
    <form>
      <v-text-field
        v-model="name"
        :counter="10"
        label="Nombre articulo"
        required
      ></v-text-field>
      <v-select
        v-model="selectc"
        :items="itemsc"
        label="Categoria"
        required
      ></v-select>
      <v-select
        v-model="selectp"
        :items="itemsp"
        label="Proveedor"
        required
      ></v-select>
      <v-select
        v-model="selecta"
        :items="itemsta"
        :error-messages="selectErrors"
        label="Tipo de articulo"
        required
      ></v-select>
      <v-btn
        class="mr-4"
        @click="submit"
        text
      >
        Guardar
      </v-btn>
      <v-btn @click="clear" text>
        clear
      </v-btn>
    </form>
  </v-app>
</div>
</div>
</template>

<script>
export default {
name:'crearusuario',
  data: () => ({
    name: '',
    email: '',
    selectc: null,
    selecta: null,
    selectp: null,
    itemsc: [
      'Electricidad',
      'Plomeria',
      'A/C',
      'Automotriz',
    ],
    itemsp: [
      'Bodega aurerra',
      'Ferreteria san lorenzo',
      'Motores electricos de Juárez',
      'Otros..',
    ],
    itemsta: [
      'Herramienta',
      'Herramienta electrica',
      'Consumible utileria',
      'Consumible tecnico',
    ],
  }),

  computed: {
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.name = '';
      this.email = '';
      this.selectc = null;
      this.selectp = null;
      this.selecta = null;
    },
  },
}
</script>

<style>
.foodtable{
  padding-left: 30%;
  padding-top: 0%;
 padding-right: 30%;
}
</style>