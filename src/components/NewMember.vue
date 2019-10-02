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
          <input
          type="file"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Tarjeta Digital"
          prepend-icon="mdi-paperclip"
          @change="onFilePicked($event.target.name, $event.target.files)"
          />
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
      imageName: "",
      files:""
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' &&
      this.phone !== '' &&
      this.files !== '' &&
      this.imageName !== '' &&
      this.company !== '' && this.owner != ""
    }
  },
  methods: {
    onFilePicked(fileName, files){
      this.imageName = files[0].name
      this.files = files
      console.log(fileName, files)
			
    },
    onRegisterMember () {
      const memberData = {       
        owner: this.owner,
        company: this.company,
        phone: this.phone,
        email: this.email,
        digitalCard: "google.com",
      }
      let formData = new FormData();
      formData.append('digitalCardName', this.imageName);
      formData.append('owner', this.owner);
      formData.append('company', this.company);
      formData.append('phone', this.phone);
      formData.append('email', this.email);
      formData.append('file', this.files[0]);

      this.$store.dispatch('registerMember', formData)
      this.$router.push('/')
    }
  }
}
</script>
