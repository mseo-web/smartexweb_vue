<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="themeImage"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="font-weight-bold mb-3">
          Welcome to SMARTEXWEB
        </h1>

        <p class="subheading font-weight-regular">
          Современные WEB - технологии идеально подходят для всех, <br>кто хочет создать захватывающий сайт!
          <br>Посмотрите наш сайт на Laravel 
          <a
            href="https://laravel.smartexweb.kz/"
            target="_blank"
          >SMARTEXWEB-Laravel</a>
        </p>
      </v-col>

      <v-col
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Что дальше?
        </h2>

      </v-col>
    </v-row>
    <v-row justify="center">
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          @click="()=>$router.push('projects')"
        >
          ПРОЕКТЫ
        </v-btn>
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          @click="()=>$router.push('contact')"
        >
          Контакты
        </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      BannerImagePath: require('@/assets/images/SM-logo2.png')
    }),
    computed: {
      themeImage () {
        if(this.$vuetify.theme.dark == true){
          this.BannerImagePath = require('@/assets/images/SM-logo2.png')
        }else {
          this.BannerImagePath = require('@/assets/images/SM-logo1.png')
        }
        return this.BannerImagePath
      },
    },
  }
</script>
