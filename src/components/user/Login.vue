<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-row>
            <v-col>
              <v-alert v-if="error !==''" :dismissible="true" type="error" class="mb-4">{{ error }}</v-alert>
            </v-col>
          </v-row>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Acceder</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Correo electrónico"
                  name="login"
                  v-model="email"
                  prepend-icon="mdi-mail"
                  type="email"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Contraseña"
                  name="password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn type="submit" @click="onLogin" color="primary">Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  computed: {
    error() {
      /* obtengo el error que hay en el store y se asigna a una propiedad */
      return this.$store.getters.getError;
    },
    user() {
      return this.$store.getters.getUser;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onLogin() {
      console.log("Login");
      if (this.email != "" && this.password != "") {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>