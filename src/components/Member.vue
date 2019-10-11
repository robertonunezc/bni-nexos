<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col cols="12">
          <v-card 
            max-width="100%">         
            <div
             style="width:100%;
             height:250px;
             background-size: cover;
             background-position: center;"
              v-bind:style="{ 'backgroundImage': 'url('+digitalCardUrlBackGround+')' }">
            
            </div>
            <!-- <img
            height="250"
            width="390"
            :src="`${digitalCardUrl}${member.digitalCard}`"            
            /> -->
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
             <a :href="`whatsapp://send?text=${digitalCardUrl}`" data-action="share/whatsapp/share">
              <img width="35" src="../assets/whatsapp.png" alt="LOGO">
            </a>
            <a :href="`fb-messenger://share/?link=${digitalCardUrl}&app_id=123456789`">
              <img width="35" src="../assets/msg.png" alt="LOGO">
            </a>            
          </v-card-actions>
          <v-card-actions v-if="isAuthenticated">
            <v-row>
              <!--<v-col cols="6">
                <v-btn block color="primary" class="m-2" :to="'/member/editar/' + member.id">Editar datos</v-btn>                
              </v-col>-->
              <v-col cols="12">
                <v-btn block  @click.stop="dialog = true" color="error" class="m-2">Eliminar</v-btn>  
              </v-col>
            </v-row>
          </v-card-actions>

        </v-card>
        <v-btn block outlined color="primary" class="mt-2" :to="'/'">Regresar al listado</v-btn>        

      </v-col>
    </v-row>
  </v-layout>
  <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Eliminar Miembro</v-card-title>

        <v-card-text>
          Estas seguro que quieres borrar al miembro {{member.owner}}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            NO
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="onDelete()"
          >
            SI
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-container>

</template>

<script>

export default {
  data () {
    return { 
      member: null,
      dialog: false,
    }
  },
  created (){
      const memberId = this.$route.params.id;
      this.member = this.$store.getters.getMember(memberId)    
  },
  computed: {      
    digitalCardUrlBackGround () {
      const digitalCard = this.$store.getters.getDigitalCardUrl      
      return `'${digitalCard}${this.member.digitalCard}'`
    },
    digitalCardUrl () {
      const digitalCard = this.$store.getters.getDigitalCardUrl      
      return `${digitalCard}${this.member.digitalCard}`
    },
    onDelete(){
      this.dialog = true;
      this.$store.dispatch('deleteMember',this.member);
      this.$router.push('/')

    },
    isAuthenticated(){
      if(this.$store.getters.getUser !== "" && this.$store.getters.getUser != null ){
        return true;
      } 
      return   false;
    }
  
  }

}
</script>