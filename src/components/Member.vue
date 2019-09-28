<template>
  <v-container>
    <v-layout wrap>
      <v-row>
        <v-col cols="12">
          <v-card>         
            <v-img
            :src="member.digitalCard"
            height="250px"
            max-width="310px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ member.owner}}</div>
                <div>{{member.company}}</div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <a :href="`mailto:${member.email}`">
                  <v-icon class="mr-2">mdi-mail</v-icon>{{ member.email }}
                </a>
              </div>
              <div>
                <a :href="`tel:${member.phone}`" >
                  <v-icon class="mr-2" >mdi-phone</v-icon>{{ member.phone }}
                </a>
              </div>
            </v-card-text>
            <v-card-title>
              <label>Compartir en:</label>
            </v-card-title>
            <v-card-actions class="justify-space-around">
             <a :href="`whatsapp://send?text=${member.imageUrl}`" data-action="share/whatsapp/share">
              <img width="35"src="../assets/whatsapp.png" alt="LOGO">
            </a>
            <a :href="`fb-messenger://share/?link=${member.imageUrl}&app_id=123456789`">
              <img width="35"src="../assets/msg.png" alt="LOGO">
            </a>            
          </v-card-actions>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn block color="primary" class="m-2":to="'/member/editar/' + member.id">Editar datos</v-btn>                
              </v-col>
              <v-col cols="6">
                <v-btn block outlined color="error" class="m-2" :to="'/'">Eliminar</v-btn>  
              </v-col>
            </v-row>
          </v-card-actions>

        </v-card>
        <v-btn block outlined color="primary" class="mt-2":to="'/'">Regresar al listado</v-btn>        

      </v-col>
    </v-row>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {   
    }
  },
  computed: {
    member () {
      const memberId = this.$route.params.id;
      return this.$store.getters.getMember(memberId)
      
    }
  }

}
</script>