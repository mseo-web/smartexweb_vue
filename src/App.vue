<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import LoginLayout from '@/layouts/LoginLayout';
import PanelLayout from '@/layouts/PanelLayout';

export default ({
  name: "App",
  computed: {
    layout() {
      // console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
      // return this.$route.meta.layout;
    }
  },
  components: {
    MainLayout,
    LoginLayout,
    PanelLayout,
  },
  data: () => ({
    //
  }),
});
</script>
