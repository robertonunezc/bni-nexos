<template>
  <v-container>
    <v-row>
      <v-col cols="11">
        <v-text-field v-model="search" placeholder="Buscar miembro"></v-text-field>        
      </v-col>
    </v-row>
   <v-row>
        <v-col>
          <v-alert v-if="successMsg !==''"      
          :dismissible="true"
          type="success"
          class="mb-4">
          {{ successMsg }}
        </v-alert>
      </v-col>
   </v-row>
    <v-row>
   
      <v-col
      v-for="miembro in members"
      :key="miembro.id"
      cols="12"
      md="4">
      <v-card>
        <v-card-title>
          {{ miembro.owner}}
        </v-card-title>
        <v-card-text>{{miembro.company }}</v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <a :href="`whatsapp://send?text=${digitalCardUrl}${miembro.digitalCard}`" data-action="share/whatsapp/share">
            <img width="35" src="../assets/whatsapp.png" alt="LOGO">
          </a>
          <a :href="`fb-messenger://share/?link=${digitalCardUrl}${miembro.digitalCard}&app_id=123456789`">
            <img width="35" src="../assets/msg.png" alt="LOGO">
          </a>
        </v-card-actions>
        <v-card-actions>
          <v-btn block color="primary" :to="'/miembro/' + miembro.id">                 
            Ver perfil
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      search: "", 
      member:null   
    }
  },
  
  computed: {
    digitalCardUrl () {
      const digitalCard = this.$store.getters.getDigitalCardUrl      
      return this.$store.getters.getDigitalCardUrl      
    },
    members () {
      return this.$store.getters.getMembers(this.search);
    },
    successMsg () {
      return this.$store.getters.getSuccessMsg;
    }
  } 
};
</script>
