<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3>
        <h4>Alta de usuario administrador</h4>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onRegisterUser">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="email"
          label="Correo electrónico"
          id="email"
          type="email"
          v-model="email"
          prepend-icon="mdi-mail"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="password"
          label="Contraseña"
          id="password"
          prepend-icon="mdi-lock"
          v-model="password"
          type="password"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn
          block          
          class="primary"          
          type="submit"
          >GUARDAR
        </v-btn>
        <v-btn
        block
        :to="'/'"
        outlined
        class="mt-2"                  
        >Cancelar
      </v-btn>
    </v-flex>
  </v-layout>
</form>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' &&
      this.password !== '' && this.password.length >= 6
    }
  },
  methods: {
    onRegisterUser () {
      if(!this.formIsValid){
        alert('Debe llenar todos los campos y la contraseña debe tener más de 6 caracteres');        
        return;
      }
      const userData = {        
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('registerUser', userData);
      //this.$router.push('/')
    }
  }
}
</script>
