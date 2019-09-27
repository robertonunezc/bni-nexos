<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>         
          <v-card-media
          :src="miembro.imageUrl"
          height="250px"
          ></v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ miembro.owner}}</div>
              <div>{{miembro.title}}</div>
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
          <v-card-actions v-flex class="justify-space-around">
           <a :href="`whatsapp://send?text=${miembro.imageUrl}`" data-action="share/whatsapp/share">
            <img width="35"src="../assets/whatsapp.png" alt="LOGO">
          </a>
          <a :href="`fb-messenger://share/?link=${miembro.imageUrl}&app_id=123456789`">
            <img width="35"src="../assets/msg.png" alt="LOGO">
          </a>
        </v-card-actions>
      </v-card>
      <v-btn outline block color="primary" :to="'/'">Regresar al listado</v-btn>
    </v-flex>
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
        title: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Pedro Lopez Perez"
            //return {this.$store.getters.loadedMember(this.id)}
          }
        }
      }

    }
    </script>