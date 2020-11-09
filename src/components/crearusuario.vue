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
      <v-text-field
        v-model="email"

        label="codigo"
        required
      ></v-text-field>
            <v-text-field
        v-model="email"
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
      <v-btn
        class="mr-4"
        @click="submit"
        text
      >
        submit
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
    select: null,
    items: [
      'Empleado bodega',
      'Empleado tecnico',
      'Empleado administrador',
      'Administrador',
    ],
  }),

  computed: {
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
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