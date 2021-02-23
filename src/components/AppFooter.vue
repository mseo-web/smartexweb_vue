<template>
  <v-footer
    
    padless: true
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(item, i) in footerMenuItems"
        :key="i"
        outlined
        class="my-2 mx-1"
        color="primary"
        :to="item.route"
      >
        {{item.title}}
      </v-btn>
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — © <strong>SMARTEXWEB</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),
    computed:{
      footerMenuItems(){
        return [
          {
            title: 'Главная',
            route: '/'
          },
          {
            title: 'О нас',
            route: '/about'
          },
          {
              title: 'Проекты',
              route: '/projects'
          },
          {
            title: 'Технологии',
            route: '/services'
          },
          {
            title: 'Контакты',
            route: '/contact'
          },
        ]
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
