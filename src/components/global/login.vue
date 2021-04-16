<template>
  <div class="logcard">
    <div id="app">
      <v-app id="inspire">
        <v-card class="cont-card" elevation="2">
          <form>
            <v-text-field
              v-model="email"
              label="correo"
              :error-messages="emailErrors"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="4"
              label="contraseña"
              :error-messages="passwordErrors"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" v-on:click="login()" text>
              Iniciar sesión
            </v-btn>
            <v-btn @click="clear" text> limpiar </v-btn>
          </form>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
  const { required, email, minLength } = require("vuelidate/lib/validators");
  import axios from "axios";

  import store from "@/store";
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  export default {
    email: "crearusuario",
    data: () => ({
      email: "a@a.com",
      password: "1234",
    }),

    validations: {
      email: { required, email },
      password: { required, minLength: minLength(4) },
    },
    computed: {
      passwordErrors() {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.minLength &&
          errors.push("Password must be at 4 characters long");
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
        axios
          .get("sanctum/csrf-cookie")
          .then((response) => {
            console.log("token del api ->", response);
            axios
              .post("api/login", enviar)
              .then((response) => {
                let validado = response.request.withCredentials;
                console.log("Usuario validado:", validado);
                if (validado == true) {
                  store.email = enviar.email;
                  store.password = enviar.password;
                  console.log(
                    "usuario existente->",
                    store.email,
                    " clave existente->",
                    store.password
                  );
                  this.$router.push("/home").catch(() => {});
                } else if (validado == false) {
                  console.log("Cuanta no existen o incorrecta");
                }
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      },

      clear() {
        this.email = "";
        this.password = "";
      },
    },
  };
</script>

<style scoped>
  .logcard {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12em;
  }

  .cont-card {
    padding-left: 2%;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    width: 24em;
  }
</style>