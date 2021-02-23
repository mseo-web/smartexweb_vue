<template>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <div class="main-banner"></div>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col>
            <v-carousel 
            :show-arrows="false"
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row> -->
        <v-row>
          <!-- <v-col cols="2">
            
          </v-col> -->
          <v-col>
            <AppBanner/>
          </v-col>
          <!-- <v-col cols="2">
            
          </v-col> -->
        </v-row>
        <v-row justify="center">
          <h3>Осваиваем технологии</h3>
        </v-row>
        <div justify="center" class="mt-4 mb-2">
          <Tecnologies/>
        </div>
      </v-container>
    </div>
</template>

<script>
  import AppBanner from '@/components/AppBanner.vue'
  import Tecnologies from '@/components/Technologies.vue'
  export default {
    name: 'Home',
    components: {
      AppBanner,
      Tecnologies
    },
    data () {
      return {
        items: [
          {
            src: require('@/assets/images/smartexweb-header-20.png'),
          },
          {
            src: require('@/assets/images/smartexweb-header-20.png'),
          },
          {
            src: require('@/assets/images/smartexweb-header-20.png'),
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main-banner {
    background-image: 'url('+require('@/assets/images/smartexweb-header-20.png')+')';
  }
</style>
