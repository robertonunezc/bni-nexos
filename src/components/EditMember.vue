<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3>
        <h4>Editar de miembro</h4>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onCreateMeetup">
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
      </v-flex>
    </v-layout>
  </form>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      email: "email@local.com",
      phone: "4429155525",
      company: "Mi Compañia",
      imageUrl: "imagen",
      owner: "Roberto Nuñez",
      files:[]
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.imageUrl !== '' &&
      this.description !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      const meetupData = {
        id: '123344',
        title: this.title,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
