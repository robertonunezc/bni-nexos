<template>
  <v-container>
    <v-layout wrap>
      <v-row>
        <v-col cols="12">
          <v-card>         
            <v-img
            :src="miembro.imageUrl"
            height="250px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ miembro.owner}}</div>
                <div>{{miembro.company}}</div>
              </div>
            </v-card-title>
            <v-card-text>
              <div>
                <a :href="`mailto:${miembro.email}`">
                  <v-icon class="mr-2">mdi-mail</v-icon>{{ miembro.email }}
                </a>
              </div>
              <div>
                <a :href="`tel:${miembro.phone}`" >
                  <v-icon class="mr-2" >mdi-phone</v-icon>{{ miembro.phone }}
                </a>
              </div>
            </v-card-text>
            <v-card-title>
              <label>Compartir en:</label>
            </v-card-title>
            <v-card-actions class="justify-space-around">
             <a :href="`whatsapp://send?text=${miembro.imageUrl}`" data-action="share/whatsapp/share">
              <img width="35"src="../assets/whatsapp.png" alt="LOGO">
            </a>
            <a :href="`fb-messenger://share/?link=${miembro.imageUrl}&app_id=123456789`">
              <img width="35"src="../assets/msg.png" alt="LOGO">
            </a>            
          </v-card-actions>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn block outlined color="secundary" class="m-2":to="'/miembro/editar/' + miembro.id">Editar datos</v-btn>                
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
  props: ['id'],
  data () {
    return {
      miembro: {
        id:4,
        email: "rcorralesn@gmail.com",
        phone: "4423183749",
        company: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Juanito"
            //return {this.$store.getters.loadedMember(this.id)}
          }
        }
      }

    }
    </script>