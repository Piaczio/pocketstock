<template>
  <div class="foodtable">
    <div id="app">
      <v-app id="inspire">
        <v-card class="cont-card" elevation="2">
          <form>
            <v-text-field
              v-model="email"
              label="Correo"
              :error-messages="emailErrors"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="8"
              label="password"
              :error-messages="passwordErrors"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" @click="login" text> login </v-btn>
            <v-btn @click="clear" text> clear </v-btn>
          </form>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
const { required, email, minLength } = require("vuelidate/lib/validators");
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  email: "crearusuario",
  data: () => ({
    email: "fsmsoftdev@gmail.com",
    password: "12345678",
  }),

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at 8 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    login() {
      this.$v.$touch();
      let enviar = {
        email: this.email,
        password: this.password,
      };

      axios.post("http://127.0.0.1:8000/login", enviar).then((response) => {
        console.log(response);
      });
    },
    clear() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
.foodtable {
  padding-left: 30%;
  padding-top: 20%;
  padding-right: 30%;
}
.cont-card {
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}
</style>