<template>
    <div>
      <v-row class="pa-4">
        <v-col cols="12" md="6">
          <v-card 
          >
            <!-- <v-img
              :src="`https://laravel.smartexweb.kz/storage/${project.photo[0].id}/${project.photo[0].file_name}`"
              :aspect-ratio="16 / 9"
              height="100%"
            ></v-img> -->
            <v-carousel 
            :show-arrows="false"
            cycle
            height="auto"
            >
              <v-carousel-item
                v-for="(item,i) in project.photo"
                :key="i"
                :src="`https://laravel.smartexweb.kz/storage/${item.id}/${item.file_name}`"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>

        <v-col>
          <div>
            <v-btn 
            class="ma-2" 
            small
            color="accent"
            v-for="category in project.categories" :key="category.id"
            >
              {{ category.name }}
            </v-btn>

            <h3 class="text-h4 font-weight-bold pt-3">
              {{ project.name }}
            </h3>

            <p class="text-h6 font-weight-regular pt-3 text--secondary">
              {{ project.description }}
            </p>

            <div class="d-flex align-center pb-3">
              <div class="font-weight-bold">Заказчик:</div>
              <div class="pl-2">{{ project.client }}</div>
            </div>

            <div class="d-flex align-center pb-3">
              <div class="font-weight-bold">Должность:</div>
              <div class="pl-2">{{ project.spec }}</div>
            </div>

            <div class="d-flex align-center pb-3">
              <div class="font-weight-bold">Сайт проекта:</div>
              <div class="pl-2"><a :href="`${project.siteurl}`" target="_blank">{{ project.siteurl }}</a></div>
            </div>

          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        project: null
      }
    },
    computed: {
      ...mapGetters(["getProjectById"]),
      
      // initProject() {
      //   this.project = this.getProjectById
      //   return this.project
      // }
    },
    methods: {
      ...mapActions(["projectGetById"]),
      
    },
    created() {
      var project_id = this.$route.params.id
      console.log('project_id: ' + project_id)
      this.projectGetById(project_id);
      this.project = this.getProjectById;
      // console.log(this.project.name);
    }
  }
</script>

<style lang="scss" scoped>

</style>
