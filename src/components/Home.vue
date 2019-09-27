<template>
  <v-container>
    <v-row>
      <v-col cols="11">
        <v-text-field v-model="search" placeholder="Buscar miembro"></v-text-field>        
      </v-col>
    </v-row>
    <v-row>
      <v-col
      v-for="miembro in miembros"
      :key="miembro.id"
      sm="cols12"
      md="cols4">
      <v-card>
        <v-card-title>
          {{ miembro.owner}}
        </v-card-title>
        <v-card-text>{{miembro.compnay}}</v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <a :href="`whatsapp://send?text=${miembro.imageUrl}`" data-action="share/whatsapp/share">
            <img width="35"src="../assets/whatsapp.png" alt="LOGO">
          </a>
          <a :href="`fb-messenger://share/?link=${miembro.imageUrl}&app_id=123456789`">
            <img width="35"src="../assets/msg.png" alt="LOGO">
          </a>
        </v-card-actions>
        <v-card-actions>
          <v-btn block color="primary":to="'/miembro/' + miembro.id">                 
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
      miembros:[
      {
        id:4,
        compnay: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Pedro Lopez Perez"
      },
      {
        id:5,
        compnay: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Pedro Lopez Perez"
      },{
        id:6,
        compnay: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Pedro Lopez Perez"
      },{
        id:7,
        compnay: "PuntoReica",
        imageUrl: "http://puntoreica.com/img/logo.png",
        owner: "Pedro Lopez Perez"
      }
      ]
    }
  } 
};
</script>
