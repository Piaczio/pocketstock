<template>
<div class="foodtable">
<div id="app">
  <v-app id="inspire">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Nombre"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="codigo"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
            <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="repetir codigo"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
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
      >
        submit
      </v-btn>
      <v-btn @click="clear">
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
    checkbox: false,
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