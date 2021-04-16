<template>
  <div class="foodtable">
    <div id="app">
      <v-app id="inspire">
        <form>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field v-model="codigo" label="codigo" required></v-text-field>
          <v-text-field
            v-model="codigo"
            label="repetir codigo"
            required
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Puesto"
            required
          ></v-select>
          <v-btn class="mr-4" @click="submit" text> submit </v-btn>
          <v-btn @click="clear" text> Limpiar </v-btn>
        </form>
      </v-app>
    </div>
  </div>
</template>

<script>
  export default {
    name: "crearusuario",
    data: () => ({
      name: "",
      codigo: "",
      select: null,
      items: [
        "Empleado bodega",
        "Empleado tecnico",
        "Empleado administrador",
        "Administrador",
      ],
    }),

    computed: {},

    methods: {
      submit() {
        this.$v.$touch();
      },
      clear() {
        this.name = "";
        this.codigo = "";
        this.select = null;
      },
    },
  };
</script>

<style scoped>
  .foodtable {
    padding-left: 30%;
    padding-top: 0%;
    padding-right: 30%;
  }
</style>