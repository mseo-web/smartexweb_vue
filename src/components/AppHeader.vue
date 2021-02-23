<template>
  <div>
    <v-toolbar
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>SMARTEXWEB</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="()=>$router.push('/login')">
        <v-icon>mdi-import</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      enable-resize-watcher
    >
      <v-img
        class="mx-auto my-2"
        :src="themeLogo"
        transition="scale-transition"
        width="100"
        contain
      />
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router-link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <div class="pa-4">
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="Это переключает глобальное состояние темы Vuetify."
          inset
          label="Vuetify Theme Dark"
          persistent-hint
        ></v-switch>
      </div> -->
      <ThemeChanger/>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import ThemeChanger from '@/components/ThemeChanger.vue'
  export default {
    components: {
      ThemeChanger
    },
    data: () => ({
      drawer: false,
      LogoImagePath: require('@/assets/images/SM-logo2.png'),
      items: [
        { title: "Главная", icon: "mdi-home", route: "/" },
        {
          title: 'О нас',
          icon: 'mdi-account-multiple',
          route: '/about'
        },
        {
          title: 'Контакты',
          icon: 'mdi-city',
          route: '/contact'
        },
        {
          title: 'Технологии',
          icon: 'mdi-application-cog',
          route: '/services'
        },
        {
          title: "Проекты",
          icon: "mdi-monitor-cellphone",
          route: "/projects"
        },
      ]
    }),
    computed: {
      themeLogo () {
        if(this.$vuetify.theme.dark == true){
          this.LogoImagePath = require('@/assets/images/SM-logo2.png')
        }else {
          this.LogoImagePath = require('@/assets/images/SM-logo1.png')
        }
        return this.LogoImagePath
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
