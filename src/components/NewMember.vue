<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3>
        <h4>Alta de miembro</h4>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onRegisterMember">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="company"
          label="Empresa"
          id="company"
          v-model="company"
          prepend-icon="mdi-domain"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="owner"
          label="Nombre completo"
          id="owner"
          prepend-icon="mdi-account"
          v-model="owner"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          v-model="files"
          placeholder="Tarjeta Digital"
          prepend-icon="mdi-paperclip"
          ></v-file-input>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="phone"
          label="Teléfono"
          id="phone"
          v-model="phone"
          prepend-icon="mdi-phone"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="email"
          label="Correo electrónico"
          id="email"
          prepend-icon="mdi-email"
          v-model="email"
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
      phone: "",
      company: "",
      owner: "",
      files:[]
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' &&
      this.phone !== '' &&
      this.files !== '' &&
      this.company !== '' && this.owner != ""
    }
  },
  methods: {
    onRegisterMember () {
      const memberData = {       
        owner: this.owner,
        company: this.company,
        phone: this.phone,
        email: this.email,
        digitalCard: "google.com",
      }
      this.$store.dispatch('registerMember', memberData)
      this.$router.push('/')
    }
  }
}
</script>
